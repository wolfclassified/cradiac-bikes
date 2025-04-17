import React from 'react'
import Banner from '../components/Banner'
import GroupCard from '../components/GroupCard'
import Footer from '../components/Footer'
import Mtbback from '../assets/mtbback.svg'
import Hybridback from '../assets/hybridback.svg'
import Cityback from '../assets/cityback.svg'
import Womenback from '../assets/womenback.svg'
import Kidsback from '../assets/kidsback.svg'

const BikeGroups = () => {
  return (
    <div className='mx-[120px]'>
    <div className='pb-4 pt-4'>
    <Banner title="Bike Groups" />
    </div>
    <div className="p-4 pb-1">
      <GroupCard
        title="Mountain Bikes"
        description="Mountain bikes are specially designed bicycles built for off-road cycling on rough terrains. They feature sturdy frames, wide tires, and suspension systems for better control and comfort."
        features={[
          {
            title: 'Durable Frame',
            detail: 'Built with strong materials like aluminum or carbon fiber to withstand tough trails.'
          },
          {
            title: 'Suspension System',
            detail: 'Front (hardtail) or both front and rear (full suspension) shocks for smooth rides over bumps.'
          },
          {
            title: 'Wide, Knobby Tires',
            detail: 'Provide better grip and stability on uneven, muddy, or rocky surfaces.'
          },
          {
            title: 'Powerful Brakes',
            detail: 'Usually disc brakes for reliable stopping power in all weather conditions.'
          }
        ]}
        backgroundImage={Mtbback}
        linkPath="/listing/Mountain"
      />
    </div>

    <div className="p-4 pb-2">
      <GroupCard
        title="Hybrid Bikes"
        description="Hybrid bikes are versatile bicycles that combine features of road bikes and mountain bikes. They are designed for general-purpose riding on various surfaces, including roads and light trails."
        features={[
          {
            title: 'Comfortable Riding Position',
            detail: 'Upright handlebars and relaxed geometry for ease during long rides.'
          },
          {
            title: 'Medium-Width Tires',
            detail: 'Offer a balance between speed on pavement and grip on rough paths.'
          },
          {
            title: 'Lightweight Frame',
            detail: 'Typically made of aluminum for easy handling and moderate speed.'
          },
          {
            title: 'Multiple Gears',
            detail: 'Allow smooth shifting for different terrains and riding conditions.'
          }
        ]}
        backgroundImage={Hybridback}
        linkPath="/listing/Hybrid"
      />
    </div>

    <div className="p-4 pb-2">
      <GroupCard
        title="City Bikes"
        description="City bikes, also known as urban or commuter bikes, are designed for comfortable and practical riding in city environments. They focus on ease of use, convenience, and everyday commuting."
        features={[
          {
            title: 'Upright Seating Position',
            detail: 'Provides better visibility and comfort for short-distance travel.'
          },
          {
            title: 'Built-in Accessories',
            detail: 'Often come with fenders, racks, baskets, and lights for daily utility.'
          },
          {
            title: 'Simple Gearing',
            detail: 'Usually have fewer gears for easy maintenance and city terrain.'
          },
          {
            title: 'Chain Guards & Kickstands',
            detail: 'Help keep clothes clean and the bike steady when parked.'
          }
        ]}
        backgroundImage={Cityback}
        linkPath="/listing/City"
      />
    </div>

    <div className="p-4 pb-2">
      <GroupCard
        title="Women Bikes"
        description="Women bikes are bicycles designed with frame geometry and components tailored to better fit female riders. They aim to provide improved comfort, control, and efficiency."
        features={[
          {
            title: 'Step-Through Frame',
            detail: 'Lower top tube for easier mounting and dismounting.'
          },
          {
            title: 'Adjusted Geometry',
            detail: 'Shorter reach and narrower handlebars to match average female proportions.'
          },
          {
            title: 'Women-Specific Saddles',
            detail: 'Designed for better comfort and support during rides.'
          },
          {
            title: 'Smaller Frame Sizes',
            detail: 'Available in compact sizes to suit a wider range of heights.'
          }
        ]}
        backgroundImage={Womenback}
        linkPath="/listing/Women"
      />
    </div>

    <div className="p-4 pb-2">
      <GroupCard
        title="Kids Bikes"
        description="Kids bikes are specially designed bicycles for children, focusing on safety, ease of use, and fun. They help young riders build confidence and develop cycling skills."
        features={[
          {
            title: 'Lightweight Frame',
            detail: 'Easier for kids to handle and maneuver.'
          },
          {
            title: 'Training Wheels (Optional)',
            detail: 'Provides support for beginners learning to balance.'
          },
          {
            title: 'Smaller Wheel Sizes',
            detail: 'Designed to fit a childs height and age range.'
          },
          {
            title: 'Safety Features',
            detail: 'Includes chain guards, handlebar padding, and easy-to-reach brakes.'
          }
        ]}
        backgroundImage={Kidsback}
        linkPath="/listing/Kids"
      />
    </div>
    </div>
  )
}

export default BikeGroups