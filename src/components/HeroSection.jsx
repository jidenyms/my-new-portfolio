import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background via-background to-transparent overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-primary opacity-20 blur-3xl rounded-full -top-20 -left-10 animate-float" />
        <div className="absolute w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full bottom-0 right-0 animate-float animation-delay-2000" />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
              Jide
            </span>
            <span className="block text-gradient-purple opacity-0 animate-fade-in-delay-2">
              Nyms
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
           I craft exceptional web experiences with modern technologies. As a front-end specialist,
            I design interfaces that are visually striking, high-performing, and centered around the user.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button text-lg px-8 py-3">
              🚀 View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
