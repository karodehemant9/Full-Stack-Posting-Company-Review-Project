const Review = require('../models/review');

exports.addReview = ((req, res, next) => {
  const companyName = req.body.companyName;
  console.log(companyName);
  const pros = req.body.pros;
  console.log(pros);
  const cons = req.body.cons;
  console.log(cons);
  const rating = req.body.rating;
  console.log(rating);
  Review.create({
    companyName: companyName,
    pros: pros,
    cons: cons,
    rating: rating
  })
  .then(result => {
    console.log('Review created');
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  }); 
})


exports.getReviews = ((req, res, next) => {
  const company = req.params.companyName;
  Review.findAll({where: { companyName: company }})
  .then(reviews => {
    console.log(reviews);
    let avgRating = 0;
    let sum = 0;
    if(reviews.length > 0)
    {
      for(let i = 0; i < reviews.length; i++)
      {
        sum = sum + reviews[i].rating;
      }
      avgRating = sum/reviews.length;
      console.log(avgRating);
      res.json({companyName: company, avgRating: avgRating, reviews: reviews});
    }
    else
    {
      res.send('No data found');
    }
    
  })
  .catch(err => console.log(err));
})




