import bcrypt from 'bcrypt';
// hash
export async function hashPassword(password) {
  const saltRounds = 10; // Define the number of hashing rounds
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

//verify
export async function verifyPassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}
