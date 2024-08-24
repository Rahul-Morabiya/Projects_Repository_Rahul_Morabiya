#include <bits/stdc++.h>
using namespace std;

//Booking class , Room , Guest , Payment, Train info

class Room{
    private:
        int roomId;
        string roomType;
        int roomBookingId;

    public:
        Room(int roomId,string roomType,int roomBookingId){
            this->roomId=roomId;
            this->roomType=roomType;
            this->roomBookingId=roomBookingId;
        }
        void getRoomDetails(){
            cout<<"Room id : "<<roomId<<endl;
            cout<<"Room Type : "<<roomType<<endl;
            cout<<"Room Booking Id : "<<roomBookingId<<endl;
        }
};

class Guest{
    private:
        int guestId;
        string name;
        string surname;
        string mobileNo;
        string emailId;

    public:
        Guest(int guestId,string name,string surname,string mobileNo,string emailId){
            this->guestId=guestId;
            this->name=name;
            this->surname=surname;
            this->mobileNo=mobileNo;
            this->emailId=emailId;
        }
        void getGuestDetails(){
            cout<<"Guest id : "<<guestId<<endl;
            cout<<"Name : "<<name<<endl;
            cout<<"Surname : "<<surname<<endl;
            cout<<"Mobile No. : "<<mobileNo<<endl;
            cout<<"Email Id : "<<emailId<<endl;
        }
};

class Payment{
    private:
        int paymentAmount;
        string cardNumber;
        bool paymentSuccessful=false;
    public:
        Payment( int paymentAmount,string cardNumber){
            this->paymentAmount=paymentAmount;
            this->cardNumber=cardNumber;
            this->paymentSuccessful=true;
        }
        void getPaymentDetails(){
            cout<<"Payment Amount : "<<paymentAmount<<endl;
            cout<<"Card Number : "<<cardNumber<<endl;
            cout<<"Payment Successful "<<endl;
        }
};


class TrainInfo{
    private:
        int trainId;
        string trainName;
    public:
        TrainInfo( int trainId,string trainName){
            this->trainId=trainId;
            this->trainName=trainName;
        }
        void getTrainDetails(){
            cout<<"Train Id : "<<trainId<<endl;
            cout<<"Train Name : "<<trainName<<endl;
        }
};

class Booking{
    private:
        int bookingId;
        int accountId;
        string from;
        string to;
        string time;
        Room room;
        Guest guest;
        Payment payment;
        TrainInfo trainInfo;
    public:
        Booking(int bookingId,int accountId,string from,string to,string time,Room room,Guest guest,Payment payment,TrainInfo trainInfo):bookingId(bookingId),accountId(accountId),from(from),to(to),guest(guest),room(room),payment(payment),trainInfo(trainInfo)
        {

        }
        void getBookingsDetails(){
            cout<<"Booking Id : "<<bookingId<<endl;
            cout<<"Account Id : "<<accountId<<endl;
            cout<<"From : "<<from<<endl;
            cout<<"To : "<<to<<endl;
            cout<<"Time"<<time<<endl;
            room.getRoomDetails();
            guest.getGuestDetails();
            payment.getPaymentDetails();
            trainInfo.getTrainDetails();
        }

};


int main(){
    Room room(01,"Deluxe 4x4",9912);
    Guest guest(1111,"Rahul","Morabiya","7990363348","rahulmorabiya1234@gmail.com");
    Payment payment(1300,"1111122222");
    TrainInfo trainInfo(19913,"Rajdhani Express");

    Booking booking(99736,123456,"Ahmedabad","Bangalore","10:25",room,guest,payment,trainInfo);
    booking.getBookingsDetails();

    return 0;
}
