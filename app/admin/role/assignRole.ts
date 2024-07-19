import { Clerk } from "@clerk/clerk-sdk-node";

const clerk = Clerk({ apiKey: "sk_test_bKQZOjmOQ55rcBjnhZdFzd2LPQhggWT8AlIfZ7iwGW" });

async function assignAdminRole(userId: string) {
  try {
    await clerk.users.updateUser(userId, {
      publicMetadata: {
        role: "admin"
      }
    });
    console.log(`Admin role assigned to user ${userId}`);
  } catch (error) {
    console.error("Error assigning admin role:", error);
  }
}

// Example usage
assignAdminRole("user_2j6cUogwgDUzMbHIwS5WoZ48h0B");
