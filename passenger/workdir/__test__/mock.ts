export const prefilled = Array.from({ length: 50 }).map((pass, ind) => ({
    name: `${"passenger" + ind}`,
    location: expect.any(String),
  }));