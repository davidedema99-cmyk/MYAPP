import java.util.HashMap;
import java.util.Map;

public class PriceList {

    public static double getPrice(String material, String type, int thickness, int diameter) {
        // Mappa dei prezzi completa
        Map<String, Map<String, Map<Integer, Map<Integer, Double>>>> prices = new HashMap<>();

        // Dati per Lana di roccia e Polinor (prezzi identici)
        Map<String, Map<Integer, Map<Integer, Double>>> lanaPolinorData = new HashMap<>();

        // Nudo
        Map<Integer, Map<Integer, Double>> nudoPrices = new HashMap<>();
        Map<Integer, Double> nudoPrices10 = new HashMap<>();
        nudoPrices10.put(18, 12.60); nudoPrices10.put(22, 13.80); nudoPrices10.put(28, 14.40); nudoPrices10.put(34, 15.60);
        nudoPrices10.put(40, 15.60); nudoPrices10.put(48, 16.80); nudoPrices10.put(60, 18.00); nudoPrices10.put(76, 32.40);
        nudoPrices10.put(89, 39.00); nudoPrices10.put(114, 45.60); nudoPrices10.put(140, 49.20); nudoPrices10.put(150, 53.40);
        nudoPrices.put(10, nudoPrices10);

        Map<Integer, Double> nudoPrices20 = new HashMap<>();
        nudoPrices20.put(18, 16.50); nudoPrices20.put(22, 16.90); nudoPrices20.put(28, 17.10); nudoPrices20.put(34, 17.70);
        nudoPrices20.put(40, 18.90); nudoPrices20.put(48, 19.50); nudoPrices20.put(60, 20.70); nudoPrices20.put(76, 35.40);
        nudoPrices20.put(89, 41.40); nudoPrices20.put(114, 46.80); nudoPrices20.put(140, 50.40); nudoPrices20.put(150, 57.20);
        nudoPrices.put(20, nudoPrices20);

        Map<Integer, Double> nudoPrices30 = new HashMap<>();
        nudoPrices30.put(18, 20.40); nudoPrices30.put(22, 21.60); nudoPrices30.put(28, 22.20); nudoPrices30.put(34, 23.40);
        nudoPrices30.put(40, 24.00); nudoPrices30.put(48, 25.80); nudoPrices30.put(60, 28.20); nudoPrices30.put(76, 39.00);
        nudoPrices30.put(89, 45.00); nudoPrices30.put(114, 52.20); nudoPrices30.put(140, 55.80); nudoPrices30.put(150, 59.40);
        nudoPrices.put(30, nudoPrices30);

        Map<Integer, Double> nudoPrices40 = new HashMap<>();
        nudoPrices40.put(18, 21.60); nudoPrices40.put(22, 22.80); nudoPrices40.put(28, 24.00); nudoPrices40.put(34, 25.20);
        nudoPrices40.put(40, 27.00); nudoPrices40.put(48, 28.80); nudoPrices40.put(60, 31.80); nudoPrices40.put(76, 42.00);
        nudoPrices40.put(89, 48.00); nudoPrices40.put(114, 55.80); nudoPrices40.put(140, 62.40); nudoPrices40.put(150, 66.00);
        nudoPrices.put(40, nudoPrices40);

        Map<Integer, Double> nudoPrices50 = new HashMap<>();
        nudoPrices50.put(18, 23.40); nudoPrices50.put(22, 25.20); nudoPrices50.put(28, 27.00); nudoPrices50.put(34, 28.80);
        nudoPrices50.put(40, 30.00); nudoPrices50.put(48, 32.40); nudoPrices50.put(60, 35.40); nudoPrices50.put(76, 45.60);
        nudoPrices50.put(89, 52.80); nudoPrices50.put(114, 60.00); nudoPrices50.put(140, 67.20); nudoPrices50.put(150, 72.00);
        nudoPrices.put(50, nudoPrices50);
        
        lanaPolinorData.put("Nudo", nudoPrices);

        // PVC
        Map<Integer, Map<Integer, Double>> pvcPrices = new HashMap<>();
        Map<Integer, Double> pvcPrices10 = new HashMap<>();
        pvcPrices10.put(18, 16.20); pvcPrices10.put(22, 18.50); pvcPrices10.put(28, 19.20); pvcPrices10.put(34, 20.40);
        pvcPrices10.put(40, 21.60); pvcPrices10.put(48, 24.00); pvcPrices10.put(60, 27.60); pvcPrices10.put(76, 39.00);
        pvcPrices10.put(89, 46.20); pvcPrices10.put(114, 53.40); pvcPrices10.put(140, 62.20); pvcPrices10.put(150, 63.00);
        pvcPrices.put(10, pvcPrices10);

        Map<Integer, Double> pvcPrices20 = new HashMap<>();
        pvcPrices20.put(18, 21.50); pvcPrices20.put(22, 23.40); pvcPrices20.put(28, 24.60); pvcPrices20.put(34, 25.80);
        pvcPrices20.put(40, 28.20); pvcPrices20.put(48, 30.00); pvcPrices20.put(60, 33.60); pvcPrices20.put(76, 42.60);
        pvcPrices20.put(89, 48.60); pvcPrices20.put(114, 57.60); pvcPrices20.put(140, 66.00); pvcPrices20.put(150, 66.00);
        pvcPrices.put(20, pvcPrices20);

        Map<Integer, Double> pvcPrices30 = new HashMap<>();
        pvcPrices30.put(18, 24.60); pvcPrices30.put(22, 25.80); pvcPrices30.put(28, 27.00); pvcPrices30.put(34, 28.80);
        pvcPrices30.put(40, 29.40); pvcPrices30.put(48, 31.80); pvcPrices30.put(60, 36.60); pvcPrices30.put(76, 45.60);
        pvcPrices30.put(89, 52.80); pvcPrices30.put(114, 61.20); pvcPrices30.put(140, 68.40); pvcPrices30.put(150, 70.00);
        pvcPrices.put(30, pvcPrices30);

        Map<Integer, Double> pvcPrices40 = new HashMap<>();
        pvcPrices40.put(18, 28.60); pvcPrices40.put(22, 29.40); pvcPrices40.put(28, 31.20); pvcPrices40.put(34, 32.40);
        pvcPrices40.put(40, 36.00); pvcPrices40.put(48, 37.80); pvcPrices40.put(60, 40.80); pvcPrices40.put(76, 50.40);
        pvcPrices40.put(89, 57.00); pvcPrices40.put(114, 66.00); pvcPrices40.put(140, 76.20); pvcPrices40.put(150, 77.00);
        pvcPrices.put(40, pvcPrices40);
        
        Map<Integer, Double> pvcPrices50 = new HashMap<>();
        pvcPrices50.put(18, 28.80); pvcPrices50.put(22, 30.00); pvcPrices50.put(28, 33.60); pvcPrices50.put(34, 35.40);
        pvcPrices50.put(40, 39.00); pvcPrices50.put(48, 41.40); pvcPrices50.put(60, 42.60); pvcPrices50.put(76, 53.40);
        pvcPrices50.put(89, 61.20); pvcPrices50.put(114, 69.00); pvcPrices50.put(140, 78.60); pvcPrices50.put(150, 80.00);
        pvcPrices.put(50, pvcPrices50);

        lanaPolinorData.put("PVC", pvcPrices);

        // Alluminio
        Map<Integer, Map<Integer, Double>> alluminioPrices = new HashMap<>();
        Map<Integer, Double> alluminioPrices10 = new HashMap<>();
        alluminioPrices10.put(18, 35.40); alluminioPrices10.put(22, 36.60); alluminioPrices10.put(28, 37.20); alluminioPrices10.put(34, 38.40);
        alluminioPrices10.put(40, 39.00); alluminioPrices10.put(48, 41.40); alluminioPrices10.put(60, 44.40); alluminioPrices10.put(76, 68.40);
        alluminioPrices10.put(89, 76.80); alluminioPrices10.put(114, 86.40); alluminioPrices10.put(140, 92.60); alluminioPrices10.put(150, 93.00);
        alluminioPrices.put(10, alluminioPrices10);

        Map<Integer, Double> alluminioPrices20 = new HashMap<>();
        alluminioPrices20.put(18, 35.40); alluminioPrices20.put(22, 36.60); alluminioPrices20.put(28, 37.20); alluminioPrices20.put(34, 38.40);
        alluminioPrices20.put(40, 39.00); alluminioPrices20.put(48, 41.40); alluminioPrices20.put(60, 44.40); alluminioPrices20.put(76, 68.40);
        alluminioPrices20.put(89, 76.80); alluminioPrices20.put(114, 86.40); alluminioPrices20.put(140, 92.60); alluminioPrices20.put(150, 93.00);
        alluminioPrices.put(20, alluminioPrices20);

        Map<Integer, Double> alluminioPrices30 = new HashMap<>();
        alluminioPrices30.put(18, 40.00); alluminioPrices30.put(22, 41.00); alluminioPrices30.put(28, 43.20); alluminioPrices30.put(34, 45.60);
        alluminioPrices30.put(40, 48.00); alluminioPrices30.put(48, 50.40); alluminioPrices30.put(60, 52.80); alluminioPrices30.put(76, 75.00);
        alluminioPrices30.put(89, 84.00); alluminioPrices30.put(114, 96.00); alluminioPrices30.put(140, 102.00); alluminioPrices30.put(150, 106.00);
        alluminioPrices.put(30, alluminioPrices30);

        Map<Integer, Double> alluminioPrices40 = new HashMap<>();
        alluminioPrices40.put(18, 45.60); alluminioPrices40.put(22, 47.40); alluminioPrices40.put(28, 50.40); alluminioPrices40.put(34, 52.80);
        alluminioPrices40.put(40, 55.20); alluminioPrices40.put(48, 57.60); alluminioPrices40.put(60, 63.60); alluminioPrices40.put(76, 84.00);
        alluminioPrices40.put(89, 93.60); alluminioPrices40.put(114, 108.00); alluminioPrices40.put(140, 117.00); alluminioPrices40.put(150, 120.00);
        alluminioPrices.put(40, alluminioPrices40);

        Map<Integer, Double> alluminioPrices50 = new HashMap<>();
        alluminioPrices50.put(18, 50.40); alluminioPrices50.put(22, 52.20); alluminioPrices50.put(28, 55.20); alluminioPrices50.put(34, 57.60);
        alluminioPrices50.put(40, 60.00); alluminioPrices50.put(48, 62.40); alluminioPrices50.put(60, 68.40); alluminioPrices50.put(76, 92.40);
        alluminioPrices50.put(89, 102.00); alluminioPrices50.put(114, 117.00); alluminioPrices50.put(140, 128.00); alluminioPrices50.put(150, 133.00);
        alluminioPrices.put(50, alluminioPrices50);

        lanaPolinorData.put("Alluminio", alluminioPrices);
        
        // Inox
        Map<Integer, Map<Integer, Double>> inoxPrices = new HashMap<>();
        Map<Integer, Double> inoxPrices10 = new HashMap<>();
        inoxPrices10.put(18, 47.20); inoxPrices10.put(22, 47.60); inoxPrices10.put(28, 48.00); inoxPrices10.put(34, 49.60);
        inoxPrices10.put(40, 52.00); inoxPrices10.put(48, 55.20); inoxPrices10.put(60, 58.40); inoxPrices10.put(76, 86.40);
        inoxPrices10.put(89, 96.00); inoxPrices10.put(114, 108.00); inoxPrices10.put(140, 118.40); inoxPrices10.put(150, 123.00);
        inoxPrices.put(10, inoxPrices10);

        Map<Integer, Double> inoxPrices20 = new HashMap<>();
        inoxPrices20.put(18, 47.20); inoxPrices20.put(22, 47.60); inoxPrices20.put(28, 48.00); inoxPrices20.put(34, 49.60);
        inoxPrices20.put(40, 52.00); inoxPrices20.put(48, 55.20); inoxPrices20.put(60, 58.40); inoxPrices20.put(76, 86.40);
        inoxPrices20.put(89, 96.00); inoxPrices20.put(114, 108.00); inoxPrices20.put(140, 118.40); inoxPrices20.put(150, 123.00);
        inoxPrices.put(20, inoxPrices20);

        Map<Integer, Double> inoxPrices30 = new HashMap<>();
        inoxPrices30.put(18, 55.00); inoxPrices30.put(22, 57.00); inoxPrices30.put(28, 60.00); inoxPrices30.put(34, 62.00);
        inoxPrices30.put(40, 65.00); inoxPrices30.put(48, 67.00); inoxPrices30.put(60, 73.00); inoxPrices30.put(76, 102.00);
        inoxPrices30.put(89, 112.00); inoxPrices30.put(114, 126.00); inoxPrices30.put(140, 136.00); inoxPrices30.put(150, 142.00);
        inoxPrices.put(30, inoxPrices30);
        
        Map<Integer, Double> inoxPrices40 = new HashMap<>();
        inoxPrices40.put(18, 60.00); inoxPrices40.put(22, 62.00); inoxPrices40.put(28, 65.00); inoxPrices40.put(34, 69.00);
        inoxPrices40.put(40, 74.00); inoxPrices40.put(48, 77.00); inoxPrices40.put(60, 84.00); inoxPrices40.put(76, 118.00);
        inoxPrices40.put(89, 128.00); inoxPrices40.put(114, 144.00); inoxPrices40.put(140, 156.00); inoxPrices40.put(150, 164.00);
        inoxPrices.put(40, inoxPrices40);
        
        Map<Integer, Double> inoxPrices50 = new HashMap<>();
        inoxPrices50.put(18, 65.00); inoxPrices50.put(22, 68.00); inoxPrices50.put(28, 71.00); inoxPrices50.put(34, 76.00);
        inoxPrices50.put(40, 80.00); inoxPrices50.put(48, 83.00); inoxPrices50.put(60, 92.00); inoxPrices50.put(76, 128.00);
        inoxPrices50.put(89, 140.00); inoxPrices50.put(114, 158.00); inoxPrices50.put(140, 172.00); inoxPrices50.put(150, 180.00);
        inoxPrices.put(50, inoxPrices50);

        lanaPolinorData.put("Inox", inoxPrices);


        prices.put("Lana di roccia", lanaPolinorData);
        prices.put("Polinor", lanaPolinorData);


        // Prezzi per la gomma
        Map<String, Map<Integer, Map<Integer, Double>>> gommaPrices = new HashMap<>();

        // Nudo
        Map<Integer, Map<Integer, Double>> gommaNudoPrices = new HashMap<>();
        Map<Integer, Double> gommaNudoPrices6 = new HashMap<>();
        gommaNudoPrices6.put(18, 12.60); gommaNudoPrices6.put(22, 13.80); gommaNudoPrices6.put(28, 14.40); gommaNudoPrices6.put(34, 15.60);
        gommaNudoPrices6.put(40, 15.60); gommaNudoPrices6.put(48, 16.80); gommaNudoPrices6.put(60, 18.00); gommaNudoPrices6.put(76, 32.40);
        gommaNudoPrices6.put(89, 39.00); gommaNudoPrices6.put(114, 45.60); gommaNudoPrices6.put(140, 49.20); gommaNudoPrices6.put(150, 53.40);
        gommaNudoPrices.put(6, gommaNudoPrices6);

        Map<Integer, Double> gommaNudoPrices9 = new HashMap<>();
        gommaNudoPrices9.put(18, 16.20); gommaNudoPrices9.put(22, 18.50); gommaNudoPrices9.put(28, 19.20); gommaNudoPrices9.put(34, 20.40);
        gommaNudoPrices9.put(40, 21.60); gommaNudoPrices9.put(48, 24.00); gommaNudoPrices9.put(60, 27.60); gommaNudoPrices9.put(76, 39.00);
        gommaNudoPrices9.put(89, 46.20); gommaNudoPrices9.put(114, 53.40); gommaNudoPrices9.put(140, 62.20); gommaNudoPrices9.put(150, 63.00);
        gommaNudoPrices.put(9, gommaNudoPrices9);

        gommaPrices.put("Nudo", gommaNudoPrices);
        
        prices.put("Gomma", gommaPrices);
        
        // Verifica se le chiavi esistono
        if (prices.containsKey(material) && prices.get(material).containsKey(type) &&
            prices.get(material).get(type).containsKey(thickness) &&
            prices.get(material).get(type).get(thickness).containsKey(diameter)) {
            
            return prices.get(material).get(type).get(thickness).get(diameter);
        }

        return 0.0; // Restituisce 0.0 se il prezzo non viene trovato
    }
}

