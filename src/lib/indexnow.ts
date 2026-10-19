// IndexNow key for www.goldiraplanet.com. Not a secret in the credential
// sense - the protocol requires it to be publicly served at /<key>.txt so
// engines can verify we own the host; it only authorizes submitting THIS
// host's URLs. Rotate by minting a new hex string, updating here, and
// renaming the public key file to match.
export const INDEXNOW_KEY = "53c5bab6902e898908bcd1ed16ba8e11e3a5e73b11e3b669bb3c03f542b97424";
export const INDEXNOW_HOST = "www.goldiraplanet.com";
