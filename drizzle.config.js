/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-content-generator_owner:CzXU5S4cBJMP@ep-bold-flower-a5zxn06g.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require',
    }
  };