#include <stdio.h>

int main() {
    int input;

    printf("Input 0 if you want to print even numbers\n");
    printf("Input 1 if you want to print odd numbers\n");
    printf("Input: ");
    scanf("%d", &input);


print_loop:
    printf("%d\n", input);
    input += 2;
    if (input <= 100) {
        goto print_loop;
    }

    return 0;
}
