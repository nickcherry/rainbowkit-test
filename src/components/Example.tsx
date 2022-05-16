import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FC } from 'react';
import { useAccount, useSignMessage } from 'wagmi';

const Example: FC = () => {
  const { data: account } = useAccount();
  const { data: signedMessage, signMessage } = useSignMessage();

  return (
    <div id="example">
      <ConnectButton />
      {account && (
        <>
          <button onClick={() => signMessage({ message: 'gm' })}>
            Sign Message
          </button>
          <div className="field">
            <div className="label">address</div>
            <div className="value">{account?.address || '–'}</div>
          </div>
          <div className="field">
            <div className="label">signed message</div>
            <div className="value">{signedMessage || '–'}</div>
          </div>
        </>
      )}
    </div>
  );
};

export { Example };
