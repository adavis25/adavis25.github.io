export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "rust-api-template",
    description:
      "Production-ready Rust API gateway template featuring Axum, async runtime, and auto-generated Swagger UI documentation via utoipa.",
    tags: ["Rust", "Axum", "Tokio", "OpenAPI"],
    github: "https://github.com/adavis25/rust-api-template",
  },
];
