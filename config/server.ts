export default ({ env }) => {
  // 👇 Añadir log aquí
  console.log("JWT usado por Strapi:", env("JWT_SECRET"));

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
