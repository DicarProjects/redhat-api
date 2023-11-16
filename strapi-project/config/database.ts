export default ({ env }) => {
  const connections = {
    postgres: {
      connection: {
        host: env('DATABASE_HOST', 'undefined'),
        port: env.int('DATABASE_PORT', undefined),
        database: env('DATABASE_NAME', 'undefined'),
        user: env('DATABASE_USERNAME', 'undefined'),
        password: env('DATABASE_PASSWORD', 'undefined'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', 'undefined'),
          cert: env('DATABASE_SSL_CERT', 'undefined'),
          ca: env('DATABASE_SSL_CA', 'undefined'),
          capath: env('DATABASE_SSL_CAPATH', 'undefined'),
          cipher: env('DATABASE_SSL_CIPHER', 'undefined'),
          rejectUnauthorized: env.bool(
            'DATABASE_SSL_REJECT_UNAUTHORIZED',
            false
          ),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
    },
  };

  return {
    connection: {
      client: 'postgres',
      ...connections.postgres,
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
