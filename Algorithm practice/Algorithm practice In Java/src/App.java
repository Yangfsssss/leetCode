// 1.1.12
// public class App {
//     public static void main(String[] args) throws Exception {
//         int[] a = new int[10];

//         for (int i = 0; i < 10; i++)
//             a[i] = 9 - i;

//         for (int i = 0; i < 10; i++)
//             a[i] = a[a[i]];

//         for (int i = 0; i < 10; i++)
//             System.out.println(i);
//     }
// }


// 1.1.14
// public class App {
//     private static int lg(int n) {
//         int shiftRightCount = 0;
//         do {
//             n = n / 2;
//             shiftRightCount++;
//         } while (n != 0);
//         return shiftRightCount - 1;
//     }

//     public static void main(String[] args) {
//         int value = 1025;
//         System.out.printf("the result of method log is :%s\r\n", lg(value));
//     }
// }


// 1.1.15
public class App {
	public static int[] histogram(int[] a, int M) {
		int[] result = new int[M];
		for (int i = 0; i < a.length; i++) {
			if (a[i] >= 0 && a[i] < M) {
				result[a[i]]++;
			}
		}
		return result;
	}

	public static void main(String[] args) {
		int[] a = { 1, 1, 2, 3, 1, 7, 5, 3, 2, 2, 2 };
		int[] result = histogram(a, 8);
		for (int i = 0; i < result.length; i++) {
			System.out.printf("%3d", result[i]);
		}
	}
}
