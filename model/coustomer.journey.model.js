let customJourneyData = {
  platform: "Flipkart",
  users: [
    {
      name: "Alice Johnson",
      id: "alice101",
      profit: 150,
      image: "",
      next: {
        action: "login",
        next: {
          action: "search",
          next: {
            action: "view_product",
            next: {
              action: "add_to_cart",
              next: {
                action: "checkout",
                next: {
                  action: "purchased",
                  next: null,
                },
              },
            },
          },
        },
      },
    },
    {
      name: "Bob Martin",
      id: "bob_m101",
      profit: 0,
      image: "",
      next: {
        action: "browse",
        next: {
          action: "search",
          next: {
            action: "view_product",
            next: {
              action: "wishlist",
              next: null,
            },
          },
        },
      },
    },
    {
      name: "Chris Lee",
      id: "chrislee202",
      profit: 450,
      image: "",
      next: {
        action: "login",
        next: {
          action: "browse",
          next: {
            action: "add_to_cart",
            next: {
              action: "checkout",
              next: {
                action: "purchased",
                next: null,
              },
            },
          },
        },
      },
    },
    {
      name: "Diana Prince",
      id: "diana303",
      profit: 250,
      image: "",
      next: {
        action: "login",
        next: {
          action: "search",
          next: {
            action: "view_product",
            next: {
              action: "wishlist",
              next: null,
            },
          },
        },
      },
    },
    {
      name: "Ethan Hunter",
      id: "ethan_hunter3012",
      profit: 0,
      image: "",
      next: {
        action: "guest_checkout",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Fiona Gallagher",
      id: "fiona_g505",
      profit: 600,
      image: "",
      next: {
        action: "login",
        next: {
          action: "browse",
          next: {
            action: "add_to_cart",
            next: {
              action: "checkout",
              next: {
                action: "purchased",
                next: null,
              },
            },
          },
        },
      },
    },
    {
      name: "George Clooney",
      id: "georgec606",
      profit: 100,
      image: "",
      next: {
        action: "login",
        next: {
          action: "browse",
          next: {
            action: "wishlist",
            next: null,
          },
        },
      },
    },
    {
      name: "Hannah Baker",
      id: "hannah_b707",
      profit: 0,
      image: "",
      next: {
        action: "login",
        next: {
          action: "search",
          next: {
            action: "view_product",
            next: {
              action: "add_to_cart",
              next: {
                action: "abandoned",
                next: null,
              },
            },
          },
        },
      },
    },
    {
      name: "Isaac Newton",
      id: "isaac_n808",
      profit: 300,
      image: "",
      next: {
        action: "guest_checkout",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Jack Sparrow",
      id: "jack_s909",
      profit: 750,
      image: "",
      next: {
        action: "login",
        next: {
          action: "search",
          next: {
            action: "view_product",
            next: {
              action: "add_to_cart",
              next: {
                action: "checkout",
                next: {
                  action: "purchased",
                  next: null,
                },
              },
            },
          },
        },
      },
    },
    {
      name: "John Doe",
      id: "john123",
      profit: 500,
      image: "",
      next: {
        action: "login",
        next: {
          action: "browse",
          next: [
            {
              action: "add_to_cart",
              next: {
                action: "checkout",
                next: {
                  action: "purchased",
                  next: null,
                },
              },
            },
            {
              action: "wishlist",
              next: null,
            },
          ],
        },
      },
    },
    {
      name: "Jane Smith",
      id: "jane456",
      profit: 0,
      image: "",
      next: {
        action: "login",
        next: {
          action: "browse",
          next: {
            action: "add_to_cart",
            next: {
              action: "abandoned",
              next: null,
            },
          },
        },
      },
    },
    {
      name: "Rajesh Kumar",
      id: "rajesh789",
      profit: 300,
      image: "",
      next: {
        action: "login",
        next: {
          action: "search",
          next: {
            action: "checkout",
            next: {
              action: "purchased",
              next: null,
            },
          },
        },
      },
    },
    {
      name: "Emily White",
      id: "emily999",
      profit: 100,
      image: "",
      next: {
        action: "guest_checkout",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Natalie Cooper",
      id: "natalie_c102",
      profit: 0,
      image: "",
      next: {
        action: "login",
        next: {
          action: "search",
          next: {
            action: "view_product",
            next: {
              action: "add_to_cart",
              next: {
                action: "abandoned",
                next: null,
              },
            },
          },
        },
      },
    },
    {
      name: "Ethan Hunt",
      id: "ethan_hunt404",
      profit: 0,
      image: "",
      next: {
        action: "guest_checkout",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Oliver Queen",
      id: "oliver_q303",
      profit: 0,
      image: "",
      next: {
        action: "login",
        next: {
          action: "browse",
          next: {
            action: "add_to_cart",
            next: {
              action: "abandoned",
              next: null,
            },
          },
        },
      },
    },
    {
      name: "Harry Potter",
      id: "harry_p202",
      profit: 0,
      image: "",
      next: {
        action: "guest_checkout",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Diana Smith",
      id: "dSmith126",
      profit: 0,
      image: "",
      next: {
        action: "login",
        next: {
          action: "browse",
          next: {
            action: "wishlist",
            next:null,
          },
        },
      },
    },

    {
      name: "John Legend",
      id: "john_legend001",
      profit: 180,
      image: "",
      next: {
        action: "login",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Lucy Heart",
      id: "lucy_heart002",
      profit: 220,
      image: "",
      next: {
        action: "guest_checkout",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Ethan Stark",
      id: "ethan_stark003",
      profit: 300,
      image: "",
      next: {
        action: "search",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Sophia Harper",
      id: "sophia_harper004",
      profit: 400,
      image: "",
      next: {
        action: "browse",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Liam Knight",
      id: "liam_knight005",
      profit: 500,
      image: "",
      next: {
        action: "login",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Emma Carter",
      id: "emma_carter006",
      profit: 250,
      image: "",
      next: {
        action: "search",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Oliver Stone",
      id: "oliver_stone007",
      profit: 350,
      image: "",
      next: {
        action: "browse",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Mia Brooks",
      id: "mia_brooks008",
      profit: 600,
      image: "",
      next: {
        action: "guest_checkout",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Noah Adams",
      id: "noah_adams009",
      profit: 450,
      image: "",
      next: {
        action: "login",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Ava Jenkins",
      id: "ava_jenkins010",
      profit: 700,
      image: "",
      next: {
        action: "search",
        next: {
          action: "purchased",
          next: null,
        },
      },
    },
    {
      name: "Jake Turner",
      id: "jake_turner001",
      profit: 0,
      image: "",
      next: {
        action: "login",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Ella Morgan",
      id: "ella_morgan002",
      profit: 0,
      image: "",
      next: {
        action: "browse",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Mason Wright",
      id: "mason_wright003",
      profit: 0,
      image: "",
      next: {
        action: "search",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Grace Miller",
      id: "grace_miller004",
      profit: 0,
      image: "",
      next: {
        action: "guest_checkout",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Ethan Roberts",
      id: "ethan_roberts005",
      profit: 0,
      image: "",
      next: {
        action: "login",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Lily Clark",
      id: "lily_clark006",
      profit: 0,
      image: "",
      next: {
        action: "search",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "James Bennett",
      id: "james_bennett007",
      profit: 0,
      image: "",
      next: {
        action: "browse",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Sophie Scott",
      id: "sophie_scott008",
      profit: 0,
      image: "",
      next: {
        action: "guest_checkout",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Lucas Perry",
      id: "lucas_perry009",
      profit: 0,
      image: "",
      next: {
        action: "login",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Amelia Ward",
      id: "amelia_ward010",
      profit: 0,
      image: "",
      next: {
        action: "browse",
        next: {
          action: "abandoned",
          next: null,
        },
      },
    },
    {
      name: "Jack Daniels",
      id: "jack_daniels001",
      profit: 350,
      image: "",
      next: {
          action: "login",
          next: {
              action: "browse",
              next: [
                  {
                      action: "add_to_cart",
                      next: {
                          action: "checkout",
                          next: {
                              action: "purchased",
                              next: null,
                          },
                      },
                  },
                  {
                      action: "wishlist",
                      next: null,
                  },
              ],
          },
      },
  },
  {
      name: "Olivia White",
      id: "olivia_white002",
      profit: 250,
      image: "",
      next: {
          action: "guest_checkout",
          next: {
              action: "purchased",
              next: null,
          },
      },
  },
  {
      name: "Benjamin Lee",
      id: "benjamin_lee003",
      profit: 400,
      image: "",
      next: {
          action: "login",
          next: {
              action: "add_to_cart",
              next: {
                  action: "checkout",
                  next: {
                      action: "purchased",
                      next: null,
                  },
              },
          },
      },
  },
  {
      name: "Sophia Turner",
      id: "sophia_turner004",
      profit: 500,
      image: "",
      next: {
          action: "search",
          next: {
              action: "view_product",
              next: {
                  action: "add_to_cart",
                  next: {
                      action: "checkout",
                      next: {
                          action: "purchased",
                          next: null,
                      },
                  },
              },
          },
      },
  },
  {
      name: "Liam Brown",
      id: "liam_brown005",
      profit: 600,
      image: "",
      next: {
          action: "login",
          next: {
              action: "browse",
              next: [
                  {
                      action: "add_to_cart",
                      next: {
                          action: "checkout",
                          next: {
                              action: "purchased",
                              next: null,
                          },
                      },
                  },
                  {
                      action: "wishlist",
                      next: null,
                  },
              ],
          },
      },
  },
  {
    name: "Jack Daniels singh",
    id: "jack_daniels1201",
    profit: 350,
    image: "",
    next: {
        action: "login",
        next: {
            action: "browse",
            next: [
                {
                    action: "add_to_cart",
                    next: {
                        action: "checkout",
                        next: {
                            action: "purchased",
                            next: null,
                        },
                    },
                },
                {
                    action: "abandoned",
                    next: null,
                },
                {
                    action: "wishlist",
                    next: null,
                },
            ],
        },
    },
},
{
  name: "Arjun Singh Yadav",
  id: "arjun_singh1201",
  profit: 350,
  image: "",
  next: {
      action: "login",
      next: {
          action: "browse",
          next: [
              {
                  action: "add_to_cart",
                  next: {
                      action: "checkout",
                      next: {
                          action: "payment",
                          next: {
                              action: "purchased",
                              next: null,
                          },
                      },
                  },
              },
              {
                  action: "abandoned",
                  next:null,
              },
              {
                  action: "wishlist",
                  next: null
              },
          ],
      },
  },
},
  ],
};

module.exports = customJourneyData;
