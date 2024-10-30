// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Proposal structure
    struct Proposal {
        string name; // Name of the proposal
        uint voteCount; // Number of accumulated votes
    }

    // Address of the contract owner (admin)
    address public admin;

    // List of proposals
    Proposal[] public proposals;

    // Mapping to keep track of voters who have voted
    mapping(address => bool) public hasVoted;

    // Event to log when a vote is cast
    event Voted(address voter, uint proposalIndex);

    // Event to log when a new proposal is created
    event ProposalCreated(string name, uint proposalIndex);

    // Modifier to restrict functions to admin only
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    // Constructor to initialize the admin and proposals
    constructor(string[] memory proposalNames) {
        admin = msg.sender; // Set the contract deployer as admin

        // Create proposals from the list of names provided
        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
            emit ProposalCreated(proposalNames[i], i);
        }
    }

    // Function to vote for a proposal
    function vote(uint proposalIndex) public {
        // Ensure the voter hasn't already voted
        require(!hasVoted[msg.sender], "You have already voted");

        // Ensure the proposal index is valid
        require(proposalIndex < proposals.length, "Invalid proposal index");

        // Record the vote
        hasVoted[msg.sender] = true;
        proposals[proposalIndex].voteCount += 1;

        emit Voted(msg.sender, proposalIndex);
    }

    // Function to get the winning proposal index
    function winningProposal() public view returns (uint winningIndex) {
        uint highestVoteCount = 0;

        for (uint i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > highestVoteCount) {
                highestVoteCount = proposals[i].voteCount;
                winningIndex = i;
            }
        }
    }

    // Function to get the name of the winning proposal
    function winnerName() public view returns (string memory) {
        uint winningIndex = winningProposal();
        return proposals[winningIndex].name;
    }

    // Admin function to add new proposals
    function addProposal(string memory proposalName) public onlyAdmin {
        proposals.push(Proposal({name: proposalName, voteCount: 0}));
        emit ProposalCreated(proposalName, proposals.length - 1);
    }
}
