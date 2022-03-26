import React from 'react';

const QuestionAnswer = () => {
    return (
        <div>
            <h2>Question Answer</h2>

            <div className="answer">

            <div className="answerCard ans-1">
                <h3>রিয়েক্ট কিভাবে কাজ করে ?</h3>
                <p>রিয়েক্ট সর্বদাই একমুখী ডেটা প্রবাহ করে থাকে, রিয়েক্ট Real Dom এর ঠিক ফটোকপি Virtual Dom তৈরি করে তারপরে Real Dom এর সাথে Compare করে শুধু মাত্র যতোটুকো item change করা দরকার ততোটুকো item change করে দেয়।</p>
            </div>

            <div className="answerCard ans-2">া
                <h3>Props vs state এ ভিতরের পার্থক্য</h3>
                <p>State একটি আপডেটযোগ্য কাঠামো যা উপাদান সম্পর্কে ডেটা বা তথ্য ধারণ করতে ব্যবহৃত হয় এবং সময়ের সাথে সাথে change হতে পারে, আর Props শুধুমাত্র পঠনযোগ্য উপাদান। এটি এমন একটি Object যা ট্যাগের attribute মান Save করে এবং HTML attribute মতো কাজ করে।</p>
            </div>

            </div>
        </div>
    );
};

export default QuestionAnswer;