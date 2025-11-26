// Make a calculator which can add, substract, multiply and devide

#include <stdio.h>

int main()
{
    char a;
    char w = 'w';
    char x = 'x';
    char y = 'y';
    char z = 'z';

    int b, c;

    printf("Please give me two numbers for eg. 1 2");
    printf("\n \n");

    scanf(" %d %d", &b, &c);

    printf("Now \n enter w to add , x to substract, y to multiply, z to divide");
    printf("\n");

    scanf(" %c", &a);
    if (a == w)
    {
        printf("%d", b + c);
    }
    if (a == x)
    {
        printf("%d", b - c);
    }
    if (a == y)
    {
        printf("%d", b * c);
    }
    if (a == z)
    {
        printf("%d", b / c);
    }

    return 0;
}