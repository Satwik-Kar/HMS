// Corrected Hashing.js
import { createHash } from 'crypto'; // Using 'crypto' for hashing

const Hashing = {
  hashPassword: (password) => {
    const salt = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
    const hash = createHash('sha256').update(password + salt).digest('hex');
    return hash;
  },
  compareHash: (password, storedHash) => {
    const salt = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
    const hash = createHash('sha256').update(password + salt).digest('hex');
    return hash === storedHash;
  },
};

export default Hashing;
