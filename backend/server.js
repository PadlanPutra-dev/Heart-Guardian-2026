const app = require('./app');
const initDatabase = require('./src/config/init-db');
const { seedDemoUser } = require('./src/models/userModel');

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await initDatabase();
  } catch (error) {
    console.warn('Database initialization skipped:', error.message);
  }

  try {
    await seedDemoUser();
  } catch (error) {
    console.warn('Demo user seeding skipped:', error.message);
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
