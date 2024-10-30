export default function ConnectCard(props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow">
        <div className="flex flex-col justify-center items-center mt-6">
          <div className="text-center">
            <h3 className="text-md font-bold">Choose Wallet</h3>
            <p className="text-sm text-gray-500 mb-4">
              Please select a wallet to connect with the app
            </p>
          </div>
          <div className="">
            <button className="flex flex-col items-center border-2 border-black rounded-lg p-4 hover:bg-gray-50">
              <img
                src="https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png"
                alt="Metamask"
                className="h-8 w-8"
              />
              <span className="mt-2 text-sm font-medium">Metamask</span>
            </button>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          onClick={() => {
            props.connectWallet();
          }}
        >
          CONNECT
        </button>
      </div>
    </div>
  );
}
