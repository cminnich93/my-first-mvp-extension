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
        In pursuit of our own technological advancement, we have created a rift between humanity and nature.
        For the first time in our planet’s history, the anthropomass—the mass of human-made goods—now outweighs the biomass—the mass of all living things. Humanity has rapidly unraveled what has taken nature billions of years of evolution to create, resulting in a threat to the continued viability of life on Earth. 
      </p>

      <p style={paragraphStyle}>
        In response to this crisis, ECOLAB proposes the creation of design solutions by, for, and with nature while advancing humanity. The goal of ECOLAB is to create a community of collaboration across disciplines, and to build meaningful public discussion about bio-design and its uses. To that end, designers are empowered to dream up new, dynamic design possibilities, where products and structures can grow, heal, and adapt.
      </p>
    </div>
  );
}

export default Mission;
