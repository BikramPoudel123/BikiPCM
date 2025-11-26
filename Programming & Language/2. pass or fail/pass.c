#include <stdio.h>

int main(){
    int a,b,c;
    printf("Please enter the mark of your three subjects");
    scanf("%d%d%d",&a,&b,&c);
    if(a>=40 && b>=40 && c>=40)
        printf("Pass damnnn");
    else printf("Fail bruda");
}