// <------------------ Destructure in TS ------------------------>

const userInfo = {name:"Farhan", 
    address:{block:"6b",
        avenue:5,
        house:17,
    },
    contact: '01968820121'
};

const {contact, address:{block}}= userInfo;