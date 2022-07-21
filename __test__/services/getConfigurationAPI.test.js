import mockAxios from "axios";
import config from '../../config/config.js';
import getConfigurationAPI from '../../services/getConfigurationAPI.js';

const { cashInAPI, cashOutNaturalAPI, cashOutLegalAPI } = config;

jest.mock('axios');

describe("getcashInAPI", () => {
    describe("when cashInAPI call is successful", () => {
      afterEach(jest.clearAllMocks);
      it("should return config for cashInAPI", async () => {
      const configCashInAPI = {
        "percents":0.03,
        "max": {
        "amount":5,
        "currency":"EUR"
      }};

      mockAxios.get.mockResolvedValueOnce(configCashInAPI);
  
      const result = await getConfigurationAPI(cashInAPI);

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(cashInAPI);
      expect(result).toEqual(configCashInAPI);
    });
  });

  describe("when API call fails", () => {
    afterEach(jest.clearAllMocks);
    it("should throw error", async () => {
      mockAxios.get.mockRejectedValueOnce('NETWORK_ERROR');

      const result = await getConfigurationAPI(cashInAPI);
      expect(mockAxios.get).toHaveBeenCalledWith(`${cashInAPI}`);
      expect(result).toEqual('NETWORK_ERROR');
    });
  });
});

describe("getcashOutLegalAPI", () => {
    describe("when cashOutLegalAPI call is successful", () => {
      afterEach(jest.clearAllMocks);
      it("should return config for cashInAPI", async () => {
      const configcashOutLegalAPI = {
        "percents":0.3,
        "min": {
        "amount":0.5,
        "currency":"EUR"
      }};

      mockAxios.get.mockResolvedValueOnce(configcashOutLegalAPI);
  
      const result = await getConfigurationAPI(cashOutLegalAPI);

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(cashOutLegalAPI);
      expect(result).toEqual(configcashOutLegalAPI);
    });
  });

  describe("when API call fails", () => {
    afterEach(jest.clearAllMocks);
    it("should throw error", async () => {
      mockAxios.get.mockRejectedValueOnce('NETWORK_ERROR');

      const result = await getConfigurationAPI(cashOutLegalAPI);
      expect(mockAxios.get).toHaveBeenCalledWith(`${cashOutLegalAPI}`);
      expect(result).toEqual('NETWORK_ERROR');
    });
  });
});

describe("getcashOutNaturalAPI", () => {
    describe("when cashOutNaturalAPI call is successful", () => {
      afterEach(jest.clearAllMocks);
      it("should return config for cashInAPI", async () => {
      const configcashOutNaturalAPI = {
        "percents":0.3,
        "week_limit": {
        "amount":1000,
        "currency":"EUR"
      }};

      mockAxios.get.mockResolvedValueOnce(configcashOutNaturalAPI);
  
      const result = await getConfigurationAPI(cashOutNaturalAPI);

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith(cashOutNaturalAPI);
      expect(result).toEqual(configcashOutNaturalAPI);
    });
  });

  describe("when API call fails", () => {
    afterEach(jest.clearAllMocks);
    it("should throw error", async () => {
      mockAxios.get.mockRejectedValueOnce('NETWORK_ERROR');

      const result = await getConfigurationAPI(cashOutLegalAPI);
      expect(mockAxios.get).toHaveBeenCalledWith(`${cashOutLegalAPI}`);
      expect(result).toEqual('NETWORK_ERROR');
    });
  });
});