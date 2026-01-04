import React from 'react'
import './Testimonials.css'
import star from '../../assets/star.png'
import {motion} from "framer-motion";

const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
       <header>
      <h2>Testimonials</h2>
      <p>Hear from our satisfied clients who trust Lakwell Energy (Pvt) Ltd for reliable, efficient, and long-lasting solar solutions.</p>
      </header>
      <main className='testi-cards'>
        <motion.article className='test-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
            <div><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/></div>
            <div><p>"Excellent service received from Lakwell. Very pleased with the results following the installation."</p></div>
            <div><h3>Chamara Abeyratne</h3></div>
            <div><h4>Chairman, UHE Group</h4></div>
        </motion.article>
        <motion.article className='test-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
            <div><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/></div>
            <div><p>"I am very happy with the service and assistance received by Lakwell. Installing Solar panels in the home is no small feat but Lakwell guided me throughout the process and I barely felt any brunt of it."</p></div>
            <div><h3>Anisha Dharmadasa</h3></div>
            <div><h4>Deputy Chairman, Nawaloka Holdings</h4></div>
        </motion.article>
        <motion.article className='test-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
            <div><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/></div>
            <div><p>"The Lakwell team installed solar panels in my home and it has since been fantastic and I am delighted with the results, the after service and the overall experience with Lakwell."</p></div>
            <div><h3>Upali Jayasinghe</h3></div>
            <div><h4>Chairman, DPJ Group</h4></div>
        </motion.article>
        <motion.article className='test-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
            <div><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/></div>
            <div><p>"I am so grateful for the service I received from the Lakwell Team. They were efficient, friendly, experienced, and gave great advice for best optimisation in my factory."</p></div>
            <div><h3>Asanka Rajapakse</h3></div>
            <div><h4>Ship Captain, Oil Dredgers</h4></div>
        </motion.article>
        <motion.article className='test-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
            <div><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/></div>
            <div><p>"Solar system were repaired and serviced professionally at my factory. Lakwell is a very responsive company with good communication and I faced no issues whatsoever."</p></div>
            <div><h3>Aruna De Silva</h3></div>
            <div><h4>Chairman, Evergreen Group</h4></div>
        </motion.article>
        <motion.article className='test-article' initial={{ opacity: 0, y: 50, scale: 0.95 }}whileInView={{ opacity: 1, y: 0, scale: 1 }}viewport={{ once: true, amount: 0.3 }} transition={{type: "spring",stiffness: 120,damping: 18,mass: 0.8}}>
            <div><img src={star}/><img src={star}/><img src={star}/><img src={star}/><img src={star}/></div>
            <div><p>"Installing Solar panels in my home was the first best decision I made and choosing Lakwell Industries for this was the second. They delivered on all their promises and I am very satisfied."</p></div>
            <div><h3>Omega Senerviratne</h3></div>
            <div><h4>Aeronautical Engineer</h4></div>
        </motion.article>
      </main>
    </div>
  )
}

export default Testimonials
