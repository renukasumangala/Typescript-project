function makeName(firstName: string, lastName: string, middleName?: string)
{
if(middleName) return firstName + " " + middleName + " " + lastName;
return firstName + " " + lastName;
}
const fullName = makeName("Tim", "Ruscica");









