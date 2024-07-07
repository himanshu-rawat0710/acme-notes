

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="pricing-plan">
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-lg font-bold mb-4">$5/month</p>
            <p className="mb-4">Basic features for individuals.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded">Sign Up</button>
          </div>
          <div className="pricing-plan">
            <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-lg font-bold mb-4">$10/month</p>
            <p className="mb-4">Advanced features for professionals.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded">Sign Up</button>
          </div>
          <div className="pricing-plan">
            <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
            <p className="text-lg font-bold mb-4">$20/month</p>
            <p className="mb-4">Full features for businesses.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded">Sign Up</button>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Pricing;
       
