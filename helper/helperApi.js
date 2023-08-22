
export const getSearvices = () => {
    const dummy = [
        {id: Math.random(), src: "/services/images/image1.png", alt: "Oxygen Gas Supply"},
        {id: Math.random(), src: "/services/images/image2.png", alt: "Nitrogen Gas Supply"},
        {id: Math.random(), src: "/services/images/image3.png", alt: "Argon Gas Supply"},
        {id: Math.random(), src: "/services/images/image4.png", alt: "Acetylene Gas supply"},
        {id: Math.random(), src: "/services/images/image5.png", alt: "Cooking gas Supply"},
        {id: Math.random(), src: "/services/images/image6.png", alt: "Industrial Machines Installation"},
        {id: Math.random(), src: "/services/images/image8.png", alt: "Fabrication and welding/installation of oil and gas pipelines"},
        {id: Math.random(), src: "/services/images/image9.png", alt: "Labour supply of welders and fitters"},
    ]

    return dummy;
}



const images = [
    {id: "1", src:"/staticimages/works1.png", alt:"workers1", description: "lorem ipsum dolor shegenakjiru jahypo oemoauhw hweb2uienj3"},
    {id: "2", src:"/staticimages/works2.png", alt:"workers2", description: "lorem ipsum dolor shegenakjiru jahypo oemoauhw hweb2uienj3"},
    {id: "3", src:"/staticimages/works3.png", alt:"workers3", description: "lorem ipsum dolor shegenakjiru jahypo oemoauhw hweb2uienj3"},
    {id: "4", src:"/staticimages/works4.png", alt:"workers4", description: "lorem ipsum dolor shegenakjiru jahypo oemoauhw hweb2uienj3"},
    {id: "5", src:"/staticimages/works5.png", alt:"workers5", description: "lorem ipsum dolor shegenakjiru jahypo oemoauhw hweb2uienj3"},
    {id: "6", src:"/staticimages/works6.png", alt:"workers6", description: "lorem ipsum dolor shegenakjiru jahypo oemoauhw hweb2uienj3"},
    {id: "7", src:"/staticimages/works7.png", alt:"workers7", description: "lorem ipsum dolor shegenakjiru jahypo oemoauhw hweb2uienj3"},
]


export const OurWorks = () => {

    return images;
};

export const eventById = (id) => {
    return images.find(item => item.id === id)
};

const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/introvert-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Networking for extroverts',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/extrovert-event.jpg',
      isFeatured: true,
    },
  ];
  

export const getAllEvents = () => {
  return DUMMY_EVENTS;
}

export const getEventById = (id) => {
  return DUMMY_EVENTS.find(item => item.id === id)
}

