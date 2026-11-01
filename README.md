# Falcon512 Recovery — v0.2.1

Independent recovery for personal Solana vaults. Every withdrawal requires the owner's Phantom signature and their Falcon-512 key. The code has not been independently audited.

## Install

1. Unzip falcon512-recovery.zip. Keep the extracted folder after installation.
2. Open chrome://extensions, brave://extensions or edge://extensions in the browser where Phantom is installed.
3. Enable Developer mode and choose **Load unpacked**.
4. Select the folder containing manifest.json. Pin **Falcon512 Recovery** to the toolbar.

To update an existing unpacked installation, replace the files in its existing folder with the new ZIP contents, then click **Reload** on its extensions-page card. Verify version **0.2.1**. Keep your recovery file and its password separately; do not delete them.

## Recover without the Falcon512 website

1. Close any Falcon512 website tabs.
2. Open a trusted ordinary HTTPS page where Phantom is available. Do not launch from a browser settings or new-tab page.
3. Click the Falcon512 Recovery toolbar icon. Keep the original HTTPS tab open.
4. Connect the owner's Phantom wallet. Select Solana Devnet in Phantom to match the deployed vault program.
5. Select your encrypted .recovery.json file, enter its password and choose **Decrypt & open**.
6. On your vault card, choose **Withdraw**, enter the asset, amount and recipient, then select **Review transaction**.
7. Check the details, choose **Sign & send**, and approve the transaction inside Phantom.

The app, cryptographic code and fonts are bundled with this extension. No Falcon512 website or CDN is needed. Solana, a working RPC, Phantom and SOL for transaction fees are still required. The original HTTPS tab is used only to call Phantom; your Falcon key and backup password are never sent to it.

## Resume interrupted vault creation

Import the same saved recovery file. If the vault is not yet registered, use **Create vault from this backup**. If it is registered but inactive, choose **Activate**. Registration and activation require separate Phantom approvals. You do not need a new Falcon key.

## Important details

- Both keys are required. Never share your Phantom seed phrase, Falcon key, recovery file or backup password.
- SOL balances include an account rent reserve that cannot be withdrawn in this version.
- Private Falcon keys are held in memory, cleared when the window closes or after 10 minutes of inactivity, and never stored in localStorage.
- Backups use AES-256-GCM and PBKDF2-SHA256 with 600,000 iterations.
- The program has no administrator withdrawal, key rotation or vault-closing operation. Losing either required key without a backup prevents withdrawal.
- Falcon protects application authorization; it does not make the entire Solana blockchain quantum-resistant.
- Token-2022 support is limited to basic transfers and metadata extensions. Transfer hooks and transfer fees are not supported.

Default RPC: https://api.devnet.solana.com

Program ID: EsQMXZQNJqDnU87uQypTo6xN6nRSR5LR1tgvy3MXMAnS

## Troubleshooting

- **Phantom not found:** launch the extension again from a trusted HTTPS tab with Phantom available. Keep that tab open.
- **Wrong owner:** switch Phantom to the same account used to create the vault.
- **Incorrect password or damaged recovery file:** select the original file and enter the password used when downloading it.
- **Modified transaction:** no transaction was sent. Check the selected network and retry; never disable transaction verification.
- **Insufficient SOL:** keep SOL in the owner's Phantom for fees and leave the rent reserve inside the vault.

Open-source credits and licenses are included in THIRD_PARTY_NOTICES.md and fonts/OFL.txt.
