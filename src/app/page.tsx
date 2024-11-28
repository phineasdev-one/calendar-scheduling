import Navbar from "@/components/element/Navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />

      <div className="font-sans text-gray-800">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center my-20">
          <div className="text-center max-w-3xl">
            <h2 className="font-bold text-[60px] text-slate-700">
              Easy scheduling ahead
            </h2>
            <h2 className="text-xl mt-5 text-slate-500">
              Scheduly is your scheduling automation platform for eliminating
              the back-and-forth emails to find the perfect time — and so much
              more.
            </h2>
            <div className="flex gap-4 flex-col mt-5">
              <h3 className="text-sm">Sign Up free with Google and Facebook</h3>
              <div className="flex justify-center gap-8"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Why Choose Our Schedule Calendar?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Easy to Use",
                  description:
                    "A user-friendly interface makes scheduling seamless.",
                  icon: "🗓️",
                },
                {
                  title: "Cross-Platform",
                  description:
                    "Access your calendar anywhere, anytime on any device.",
                  icon: "🌐",
                },
                {
                  title: "Customizable",
                  description:
                    "Tailor your calendar to fit your personal and professional needs.",
                  icon: "⚙️",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 text-left"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">
              What Our Users Are Saying
            </h2>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "This calendar changed the way I manage my time. It's a lifesaver!",
                  name: "John Doe",
                  role: "Product Manager",
                },
                {
                  quote:
                    "The customization options are incredible. I can't imagine life without it now!",
                  name: "Jane Smith",
                  role: "Freelancer",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 shadow-md rounded-lg p-6 text-left"
                >
                  <p className="text-lg italic mb-4">{testimonial.quote}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-indigo-500 text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Ready to Simplify Your Schedule?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Join thousands of happy users and take control of your time today.
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-500 font-semibold"
            >
              Sign Up for Free
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
