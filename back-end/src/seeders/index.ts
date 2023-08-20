import { createUserSeeder } from "./user.seeder";

const seedDatabase = async () => {
  console.log("Seeding started...");
  const user = await createUserSeeder();
  console.log(`Created user with ID: ${user.id}`);
};

seedDatabase().catch((error) => {
  console.error("Error seeding database:", error);
});
