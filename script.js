import java.util.HashMap;
import java.util.Map;

public class PriceList {

    private static final Map<String, Map<String, Map<Integer, Map<Integer, Double>>>> prices = new HashMap<>();
    private static final Map<String, Map<Integer, Map<Integer, Double>>> curvePrices = new HashMap<>();

    static {
        // Mappa dei prezzi completa per i tubi
        Map<String, Map<Integer, Map<Integer, Double>>> lanaPolinorData = new HashMap<>();
        Map<String, Map<Integer, Map<Integer, Double>>> gommaData = new HashMap<>();

        // Prezzi per Lana di roccia e Polinor (prezzi identici)
        Map<Integer, Map<Integer, Double>> nudoPrices = new HashMap<>();
        nudoPrices.put(10, Map.of(18, 11.20, 22, 12.00, 28, 12.80, 34, 13.50, 40, 14.20, 48, 15.00, 60, 15.80, 76, 28.50, 89, 34.00, 114, 38.50, 140, 42.00, 150, 46.00));
        nudoPrices.put(20, Map.of(18, 15.00, 22, 15.60, 28, 16.00, 34, 16.50, 40, 17.50, 48, 18.20, 60, 19.50, 76, 32.00, 89, 38.00, 114, 42.50, 140, 46.00, 150, 50.00));
        nudoPrices.put(30, Map.of(18, 19.00, 22, 19.80, 28, 20.50, 34, 21.00, 40, 22.00, 48, 23.50, 60, 25.00, 76, 35.00, 89, 41.00, 114, 48.00, 140, 51.50, 150, 55.00));
        nudoPrices.put(40, Map.of(18, 20.00, 22, 21.00, 28, 22.00, 34, 23.00, 40, 24.50, 48, 26.00, 60, 29.00, 76, 38.00, 89, 44.00, 114, 51.00, 140, 58.00, 150, 61.50));
        nudoPrices.put(50, Map.of(18, 22.00, 22, 23.00, 28, 24.50, 34, 26.00, 40, 27.50, 48, 29.00, 60, 32.00, 76, 42.00, 89, 48.50, 114, 55.00, 140, 62.00, 150, 67.00));
        lanaPolinorData.put("Nudo", nudoPrices);
        lanaPolinorData.put("senza_rivestimento", nudoPrices);

        Map<Integer, Map<Integer, Double>> pvcPrices = new HashMap<>();
        pvcPrices.put(10, Map.of(18, 14.50, 22, 16.80, 28, 17.50, 34, 18.50, 40, 19.50, 48, 21.50, 60, 25.00, 76, 35.50, 89, 42.00, 114, 49.00, 140, 56.50, 150, 59.00));
        pvcPrices.put(20, Map.of(18, 19.50, 22, 21.00, 28, 22.50, 34, 23.50, 40, 25.50, 48, 27.00, 60, 30.50, 76, 39.00, 89, 44.50, 114, 52.00, 140, 59.00, 150, 62.00));
        pvcPrices.put(30, Map.of(18, 22.00, 22, 23.00, 28, 24.50, 34, 25.50, 40, 26.50, 48, 28.50, 60, 33.00, 76, 42.50, 89, 49.00, 114, 57.00, 140, 64.50, 150, 67.00));
        pvcPrices.put(40, Map.of(18, 26.00, 22, 27.00, 28, 29.00, 34, 30.00, 40, 33.00, 48, 35.00, 60, 38.00, 76, 47.00, 89, 53.00, 114, 61.00, 140, 71.00, 150, 74.00));
        pvcPrices.put(50, Map.of(18, 26.50, 22, 27.50, 28, 31.00, 34, 33.00, 40, 36.00, 48, 38.50, 60, 39.50, 76, 49.50, 89, 56.50, 114, 64.00, 140, 73.00, 150, 76.00));
        lanaPolinorData.put("PVC", pvcPrices);

        Map<Integer, Map<Integer, Double>> alluminioPrices = new HashMap<>();
        alluminioPrices.put(10, Map.of(18, 32.00, 22, 33.00, 28, 34.00, 34, 35.00, 40, 36.00, 48, 38.00, 60, 41.00, 76, 62.00, 89, 69.00, 114, 78.00, 140, 84.00, 150, 88.00));
        alluminioPrices.put(20, Map.of(18, 32.00, 22, 33.00, 28, 34.00, 34, 35.00, 40, 36.00, 48, 38.00, 60, 41.00, 76, 62.00, 89, 69.00, 114, 78.00, 140, 84.00, 150, 88.00));
        alluminioPrices.put(30, Map.of(18, 36.00, 22, 37.00, 28, 39.00, 34, 41.00, 40, 43.00, 48, 45.00, 60, 48.00, 76, 68.00, 89, 75.00, 114, 87.00, 140, 93.00, 150, 97.00));
        alluminioPrices.put(40, Map.of(18, 41.00, 22, 43.00, 28, 45.50, 34, 47.50, 40, 50.00, 48, 52.00, 60, 57.00, 76, 76.00, 89, 85.00, 114, 98.00, 140, 106.00, 150, 109.00));
        alluminioPrices.put(50, Map.of(18, 45.00, 22, 47.00, 28, 50.00, 34, 52.00, 40, 55.00, 48, 57.00, 60, 62.00, 76, 83.00, 89, 92.00, 114, 106.00, 140, 115.00, 150, 120.00));
        lanaPolinorData.put("Alluminio", alluminioPrices);

        Map<Integer, Map<Integer, Double>> inoxPrices = new HashMap<>();
        inoxPrices.put(10, Map.of(18, 42.00, 22, 43.00, 28, 44.00, 34, 45.00, 40, 47.00, 48, 50.00, 60, 53.00, 76, 78.00, 89, 86.00, 114, 98.00, 140, 108.00, 150, 112.00));
        inoxPrices.put(20, Map.of(18, 42.00, 22, 43.00, 28, 44.00, 34, 45.00, 40, 47.00, 48, 50.00, 60, 53.00, 76, 78.00, 89, 86.00, 114, 98.00, 140, 108.00, 150, 112.00));
        inoxPrices.put(30, Map.of(18, 49.00, 22, 51.00, 28, 54.00, 34, 56.00, 40, 59.00, 48, 61.00, 60, 66.00, 76, 92.00, 89, 101.00, 114, 114.00, 140, 124.00, 150, 130.00));
        inoxPrices.put(40, Map.of(18, 54.00, 22, 56.00, 28, 59.00, 34, 62.00, 40, 67.00, 48, 70.00, 60, 76.00, 76, 107.00, 89, 116.00, 114, 130.00, 140, 142.00, 150, 149.00));
        inoxPrices.put(50, Map.of(18, 59.00, 22, 62.00, 28, 65.00, 34, 69.00, 40, 73.00, 48, 76.00, 60, 83.00, 76, 117.00, 89, 128.00, 114, 145.00, 140, 159.00, 150, 167.00));
        lanaPolinorData.put("Inox", inoxPrices);
        
        prices.put("Lana di roccia", lanaPolinorData);
        prices.put("Polinor", lanaPolinorData);

        // Prezzi per Gomma
        Map<Integer, Map<Integer, Double>> gommaNudoPrices = new HashMap<>();
        gommaNudoPrices.put(6, Map.of(18, 11.20, 22, 12.00, 28, 12.80, 34, 13.50, 40, 14.20, 48, 15.00, 60, 15.80, 76, 28.50, 89, 34.00, 114, 38.50, 140, 42.00, 150, 46.00));
        gommaNudoPrices.put(9, Map.of(18, 14.50, 22, 16.80, 28, 17.50, 34, 18.50, 40, 19.50, 48, 21.50, 60, 25.00, 76, 35.50, 89, 42.00, 114, 49.00, 140, 56.50, 150, 59.00));
        gommaData.put("Nudo", gommaNudoPrices);
        gommaData.put("senza_rivestimento", gommaNudoPrices);
        
        prices.put("Gomma", gommaData);

        // Prezzi per le curve
        Map<Integer, Map<Integer, Double>> lanaPolinorCurve = new HashMap<>();
        lanaPolinorCurve.put(10, Map.of(18, 18.00, 22, 19.50, 28, 20.00, 34, 21.50, 40, 23.00, 48, 24.50, 60, 25.50, 76, 40.00, 89, 46.00, 114, 55.00, 140, 62.00, 150, 68.00));
        lanaPolinorCurve.put(20, Map.of(18, 20.00, 22, 22.00, 28, 23.50, 34, 25.00, 40, 27.00, 48, 29.00, 60, 32.00, 76, 45.00, 89, 52.00, 114, 60.00, 140, 68.00, 150, 74.00));
        lanaPolinorCurve.put(30, Map.of(18, 24.00, 22, 25.50, 28, 27.00, 34, 28.50, 40, 30.00, 48, 32.00, 60, 36.00, 76, 49.00, 89, 56.00, 114, 65.00, 140, 72.00, 150, 78.00));
        lanaPolinorCurve.put(40, Map.of(18, 26.00, 22, 27.50, 28, 29.00, 34, 30.50, 40, 33.00, 48, 35.00, 60, 39.00, 76, 52.00, 89, 59.00, 114, 68.00, 140, 77.00, 150, 82.00));
        lanaPolinorCurve.put(50, Map.of(18, 28.00, 22, 29.50, 28, 31.00, 34, 33.00, 40, 35.00, 48, 37.00, 60, 41.00, 76, 55.00, 89, 63.00, 114, 72.00, 140, 80.00, 150, 86.00));
        
        curvePrices.put("Lana di roccia", lanaPolinorCurve);
        curvePrices.put("Polinor", lanaPolinorCurve);
        
        Map<Integer, Map<Integer, Double>> gommaCurve = new HashMap<>();
        gommaCurve.put(6, Map.of(18, 16.00, 22, 17.50, 28, 18.00, 34, 19.50, 40, 21.00, 48, 22.00, 60, 23.00, 76, 35.00, 89, 41.00, 114, 48.00, 140, 54.00, 150, 60.00));
        gommaCurve.put(9, Map.of(18, 19.00, 22, 21.00, 28, 22.00, 34, 23.50, 40, 25.00, 48, 27.00, 60, 30.00, 76, 41.00, 89, 48.00, 114, 55.00, 140, 63.00, 150, 67.00));
        
        curvePrices.put("Gomma", gommaCurve);
    }

    public static double getPrice(String material, String type, int thickness, int diameter) {
        if (prices.containsKey(material) && prices.get(material).containsKey(type) &&
            prices.get(material).get(type).containsKey(thickness) &&
            prices.get(material).get(type).get(thickness).containsKey(diameter)) {
            
            return prices.get(material).get(type).get(thickness).get(diameter);
        }
        return 0.0;
    }

    public static double getCurvePrice(String material, int thickness, int diameter) {
        if (curvePrices.containsKey(material) && curvePrices.get(material).containsKey(thickness) &&
            curvePrices.get(material).get(thickness).containsKey(diameter)) {

            return curvePrices.get(material).get(thickness).get(diameter);
        }
        return 0.0;
    }
}

