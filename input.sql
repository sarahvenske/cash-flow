-- After connecting and running migrations in your database, execute the following SQLs scripts to populate DB with data:

-- 1. Insert categories options:

INSERT INTO categories ("name")
VALUES ('Communications'), ('Education'), ('Entertainment'), ('Food'), ('Health & Care'), ('Housing'), ('Investments'), ('Loans'), ('Income'), ('Transportation');

-- 2. Insert methods options:

INSERT INTO methods ("name")
VALUES ('Credit Card'), ('Debit Card'), ('Transfer'), ('Deposit'), ('Check'), ('Withdrawal');

-- 3. Create an user (only one needed):

INSERT INTO users (id, "name", "email", "password" , "accountNumber" , "createdAt" , "isCompany")
VALUES 
    (
      uuid_generate_v4(), 
      'John Doe',         
      'johndoe@mail.com', 
      '$2a$10$h/VmTCWDDAD9F8EEU9uIAu1MR11XBVhjm3Qks41YS/3lVklBnlEvS',   
      '1234567890',         
      CURRENT_DATE,         
      false                
    );

-- 4. Populate database with transactions:

DO $$ 
DECLARE 
    random_destination_name TEXT;
    random_value NUMERIC(10,2);
    random_date DATE;
    random_hour TIME;
    random_category_id INT;
    random_method_id INT;
    user_id UUID;

    destination_names TEXT[] := ARRAY[
        'Star Bucks', 'Mobile Company', 'Book Store XYZ', 'Movie Theater', 'Local Deli',
        'Pharmacy ABC', 'Rent Payment', 'Stocks ABC', 'Loan Instalment', 'Taxi Ride',
        'Salary', 'Internet Bill', 'University Fees', 'Concert Ticket', 'Pizza Hut',
        'Dental Clinic', 'Mortgage', 'Bond Investment', 'Credit Payment', 'Train Ticket',
        'Bonus', 'Phone Upgrade', 'Course Payment', 'Music Subscription', 'Coffee Shop XYZ',
        'Gym Membership', 'Utility Bill', 'Property Investment', 'Loan Interest', 'Gas Station',
        'Freelance Job', 'Super Mart', 'TV Subscription', 'Magazine Store', 'Theme Park',
        'Local Market', 'Optics Store', 'Maintenance Fees', 'Shares DEF', 'Installment Payment',
        'Bus Fare', 'Bonus Payout', 'Water Bill', 'School Fees', 'Live Show',
        'Burger King', 'Medical Bill', 'Home Loan', 'Mutual Funds', 'Card Payment',
        'Air Ticket', 'Referral Bonus', 'Gadget Purchase'
    ];
BEGIN
    -- Get the first user's UUID
    SELECT id INTO user_id FROM public.users LIMIT 1;

    FOR i IN 1..10000 LOOP
        -- Generate random values
        random_destination_name = destination_names[FLOOR(1 + random() * ARRAY_LENGTH(destination_names, 1))::INT];
        random_value = ROUND(10 + (random() * 200)::NUMERIC, 2); -- A random value between 10 and 210
        random_date = DATE '2021-01-01' + CAST(FLOOR(random() * 1096) AS INT); -- A random date between 2021 and 2023
        random_hour = (FLOOR(random()*24)::INT || ':' || FLOOR(random()*60)::INT || ':' || FLOOR(random()*60)::INT)::TIME; -- A random time
        random_category_id = FLOOR(1 + random() * 10)::INT; -- Random category from 1 to 10
        random_method_id = FLOOR(1 + random() * 6)::INT; -- Random method from 1 to 6

        -- Insert transaction
        INSERT INTO public.transactions("destinationName", value, date, hour, "userOriginId", "categoryId", "methodId")
        VALUES (random_destination_name, random_value, random_date, random_hour, user_id, random_category_id, random_method_id);

    END LOOP;

END $$;