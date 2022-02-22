module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0277d99a7b89aaa7c8832405c868f302'),
  },
});
