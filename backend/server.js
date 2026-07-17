const app = require('./app');
const initDatabase = require('./src/config/init-db');
const { seedDemoUser } = require('./src/models/userModel');

const PORT = Number(process.env.PORT || 5000);

function startServer(port) {
  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      const fallbackPort = port + 1;
      console.warn(`Port ${port} is busy, trying ${fallbackPort}...`);
      startServer(fallbackPort);
      return;
    }

    console.error(error);
    process.exit(1);
  });
}

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

  startServer(PORT);
})();
