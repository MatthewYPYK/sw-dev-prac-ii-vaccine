import HospitalCatalog from "@/components/hospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockData = {
  success: true,
  count: 3,
  data: [
    {
      _id: "6521270d78684c85f2e9c289",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
    },
    {
      _id: "65215a2b78684c85f2e9c28e",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
    },
    {
      _id: "65215a8478684c85f2e9c291",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
    },
  ],
};

describe("HospitalCatalog", () => {
  it("Hospital Images", async () => {
    const hospitalCatalog = await HospitalCatalog({
      hospitalPromise: mockData,
    });
    render(hospitalCatalog);
    await waitFor(() => {
      const hospitalImages = screen.queryAllByRole("img");
      expect(hospitalImages.length).toBe(3);
    });
  });
});