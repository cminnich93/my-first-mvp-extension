import { Link } from "react-router-dom";

function Mission() {
  const paragraphStyle = {
    fontSize: '1.5rem',
    fontFamily: 'sans-serif', 
    lineHeight: '1.5', 
    textAlign: 'center',
  };

  return (
    <div>
      <h1 style={{ fontSize: '3rem' }}>Mission</h1>
      
      <p style={paragraphStyle}>
        In pursuit of our own technological advancement, we have designed a world that has created a rift between humanity and nature.
        For the first time in our planet’s history, the anthropomass—the mass of human-made goods—now outweighs the biomass—the mass of all living things. Humanity has rapidly unraveled what has taken Nature billions of years of evolution to create, resulting in a threat to the continued viability of life on Earth. It is now our responsibility to heal it.
      </p>

      <p style={paragraphStyle}>
        ECOLAB proposes the creation of design solutions by, for, and with Nature while advancing humanity. Designers are empowered to dream up new, dynamic design possibilities, where products and structures can grow, heal, and adapt.
      </p>
    </div>
  );
}

export default Mission;
