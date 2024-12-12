import crypto from 'crypto';

// Generate a secret key (do this once and store it securely, e.g., in an environment variable)
const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY
const IV_LENGTH = 16; // Initialization vector length
// Encrypt
export function encrypt(name) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
  let encrypted = cipher.update(name, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
}

// Decrypt
export function decrypt(encryptedName) {
  const [iv, encrypted] = encryptedName.split(':');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
