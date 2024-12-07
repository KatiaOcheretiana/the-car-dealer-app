const URL = process.env.NEXT_PUBLIC_API_URL;

export class VehicleService {
  static async getVehicleMakes() {
    try {
      const res = await fetch(`${URL}GetMakesForVehicleType/car?format=json`);

      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching vehicle makes.");
    }
  }

  static async getVechicleData(makeId, year) {
    try {
      const res = await fetch(
        `${URL}GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
      );

      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching vehicle models");
    }
  }
}
