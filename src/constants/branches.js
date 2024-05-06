const branches = [
  {
    id: 1,
    branchAddress: "MAX WAY BERUNIY",
    fullAddress: "улица Беруни, 47, Ташкент",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "22:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 2,
    branchAddress: "MAX WAY ATLAS",
    fullAddress: "улица Катартал, 28, Ташкент",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "22:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 3,
    branchAddress: "MAX WAY - DRUJBA",
    fullAddress: "микрорайон Алмазар, 8/2, Чиланзарский район, Ташкент",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "04:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 4,
    branchAddress: "MAX WAY MEGA PLANET",
    fullAddress: "улица Ниязбек, 1",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "23:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 5,
    branchAddress: "MAX WAY AVIASOZLAR",
    fullAddress: "улица Авиасозлар, 23",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "03:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 6,
    branchAddress: "MAX WAY RISOVIY",
    fullAddress: "Узбекистан, Ташкент, Алтынкульская улица, 10",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "03:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 7,
    branchAddress: "MAX WAY PARUS",
    fullAddress: "улица Катартал, 60/5",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "03:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 8,
    branchAddress: "MAX WAY MAGIC CITY",
    fullAddress: "Узбекистан, Ташкент, улица Бабура, 174/6",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "22:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 9,
    branchAddress: "MAX WAY SAMARQAND DARVOZA",
    fullAddress: "Узбекистан, Ташкент, улица Коратош, 5А",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "22:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 10,
    branchAddress: "MAX WAY PARKENT",
    fullAddress:
      "Узбекистан, Ташкент, Яшнободский район, массив Мавлоно Риёзи, 30В",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "03:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 11,
    branchAddress: "MAX WAY UNIVERSAM",
    fullAddress: "Узбекистан, Ташкент, проспект Амира Темура, 41/3",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "23:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 12,
    branchAddress: "MAX WAY ROYSON",
    fullAddress: "Узбекистан, Ташкент, улица Заркайнар, 2",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "01:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 13,
    branchAddress: "MAX WAY NEXT",
    fullAddress: "Узбекистан, Ташкент, улица Бабура, 6",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "22:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 14,
    branchAddress: "MAX WAY MUQUMIY",
    fullAddress: "Узбекистан, Ташкент, улица Чиланзар",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "04:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 15,
    branchAddress: "MAX WAY GRAND MIR",
    fullAddress: "Узбекистан, Ташкент, улица Шота Руставели, 9А",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "03:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 16,
    branchAddress: "MAX WAY SAYRAM",
    fullAddress: "Узбекистан, Ташкент, улица Юнусота",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "03:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 17,
    branchAddress: "MAX WAY MAKSIM GORKIY",
    fullAddress: "махалля Элобод",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "01:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 18,
    branchAddress: "MAX WAY SERGELI",
    fullAddress:
      "Узбекистан, Ташкент, Сергелийский район, массив Сергели-VIIIА, 11",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "03:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 19,
    branchAddress: "MAX WAY FONTAN",
    fullAddress: "проспект Амира Темура",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "03:00",
    phoneNumber: "+998712005400",
  },
  {
    id: 20,
    branchAddress: "MAX WAY MINOR",
    fullAddress: "MaxWay",
    startDay: "Monday",
    endDay: "Sunday",
    startHour: "10:00",
    endHour: "03:00",
    phoneNumber: "+998712005400",
  },
];

export default branches;