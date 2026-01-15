import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.svg");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const buttons = screen.getAllByRole("button", {
      name: /sign up for free/i,
    });
    expect(buttons.length).toBeGreaterThan(0);
    expect(buttons[0]).toHaveClass("btn");
  });
});
