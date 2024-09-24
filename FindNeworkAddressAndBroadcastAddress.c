#include <stdio.h>
#include<malloc.h>
#include<conio.h>

/*
    To convert the binary string to decimal number by given the range from starting index to ending index 
*/

int binaryToDecimal(char* s,int startingIndex,int endingIndex){

        int twoPower = 1 ;
        int decimal = 0 ;
        
        for (int i = endingIndex; i >= startingIndex ; i--)
        {
            decimal += (s[i]  - 48 ) * twoPower ; //to convet the char to integer and multiply 2s power
            twoPower *= 2 ;                       //to increase the 2s power
        }
        return decimal ;
}

/* 
    To convert the Subnet Mask into the 4 byte decimal number system and use the n/w and b/w address 
    to reprents the method to convert length of subnet mask to decimal number 
*/

int* subnetOctent(int n){
    //to reprents the 32 bits string 
    char* bits = (int*)malloc(sizeof(char) * 32);
    //to define the decimal octent and assign the in this pointer 
    int* subnetDec = (int*)malloc(sizeof(int) * 4);
    for (int i = 0; i < 32; i++)
    {
        if (i < n )
        {
            bits[i] = '1' ;
        }
        else
        {
            bits[i] = '0' ;
        }
    }
    
    subnetDec[0] = binaryToDecimal(bits,0,7);
    subnetDec[1] = binaryToDecimal(bits,8,15);
    subnetDec[2] = binaryToDecimal(bits,16,23);
    subnetDec[3] = binaryToDecimal(bits,24,31);

    return subnetDec ; 
}
void main()
{
    const int HIGHESTEIGHTHBIT = 255 ;
    /* 
        reprents the ip address octent form its 4 byte decimal number 
        ex : 130.130.100.78
        here each one => one byte number 
        ex : ipOctent1 -> 130
             ipOctent2 -> 130
             ipOctent3 -> 100
             ipOctent4 -> 78
    */
    int ipOctent1, ipOctent2, ipOctent3, ipOctent4;

    /* 
        the subnet mask number -> all bits 1s 
        ex : /28 means 255.255.255.240 
    */
    int lengthOfsubnetMask;
    int *subnetMask;
    
    /*
        to reprents the network address octent by number 
        ex 152.34.0.0
        first Octent Number : 152 that is netAddressOctent1
    */
    int netAddressOctent1,netAddressOctent2,netAddressOctent3,netAddressOctent4;

    /*
        to reprents the broad address octent by number 
        ex 152.34.0.0
        first Octent Number : 152 that is broadCastAddressOctent1
    */
    int broadCastAddressOctent1,broadCastAddressOctent2,broadCastAddressOctent3,broadCastAddressOctent4;

    printf("------------------------------------------------------------------------------------------------------\n");
    printf("\t\t\t\tfind the Network and Broadcast Address\n");
    printf("------------------------------------------------------------------------------------------------------\n");
    // Entering the IP address
    // ex 100.130.100.230 / 24
    //  first 32 bits is ip address and than its subnet mask length which include the all length of bits is 1s
    //  24 means 255.255.255.0
    while(1)
    {
        printf("Enter an IP address with subnet mask : (ip/subnet mask)  ");
        scanf("%d.%d.%d.%d/%d", &ipOctent1, &ipOctent2, &ipOctent3, &ipOctent4, &lengthOfsubnetMask);
        if ((ipOctent1 < 0 || ipOctent1 > 255) || (ipOctent2 < 0 || ipOctent2 > 255) || (ipOctent3 < 0 || ipOctent3 > 255) || (ipOctent4 < 0 || ipOctent4 > 255))
        {
            printf("Invaild The Ip address \nPlease try Again");
        }
        else if (lengthOfsubnetMask > 32)
        {
            printf("Invaild the mask \nTry again ");
            printf("Enter subnet mask : (ex : 24 )  ");
            scanf("%d", &lengthOfsubnetMask);
            break;
        }
        else
        {
            break;
        }
    }

    subnetMask  = subnetOctent(lengthOfsubnetMask); // the 4 byte decimal number 
    
    /*
        here the ip address subOctent byte to And operation with subnet mask versa ve...
    */

    netAddressOctent1 = ipOctent1 & subnetMask[0] ;
    netAddressOctent2 = ipOctent2 & subnetMask[1] ;
    netAddressOctent3 = ipOctent3 & subnetMask[2] ;
    netAddressOctent4 = ipOctent4 & subnetMask[3] ;

    //show the network address by decimal 4 byte number system

    printf("Network Address : %d.%d.%d.%d\n",netAddressOctent1,netAddressOctent2,netAddressOctent3,netAddressOctent4);

    /* 
        To calulate the broad cast address 
    */

    broadCastAddressOctent1 = netAddressOctent1 | (HIGHESTEIGHTHBIT ^  subnetMask[0]); 
    broadCastAddressOctent2 = netAddressOctent2 | (HIGHESTEIGHTHBIT ^  subnetMask[1]); 
    broadCastAddressOctent3 = netAddressOctent3 | (HIGHESTEIGHTHBIT ^  subnetMask[2]); 
    broadCastAddressOctent4 = netAddressOctent4 | (HIGHESTEIGHTHBIT ^  subnetMask[3]); 

    printf("Broadcast Address : %d.%d.%d.%d\n",broadCastAddressOctent1,broadCastAddressOctent2,broadCastAddressOctent3,broadCastAddressOctent4);

    
}