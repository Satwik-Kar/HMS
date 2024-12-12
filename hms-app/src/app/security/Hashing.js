// Corrected Hashing.js
import { createHash } from 'crypto'; // Using 'crypto' for hashing

const Hashing = {
  hashPassword: (password) => {
    const salt = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
    const hash = createHash('sha256').update(password + salt).digest('hex');
    return hash;
  }
};

export default Hashing;
