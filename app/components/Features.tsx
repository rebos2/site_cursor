'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Accuracy',
    description: 'AI audits achieve up to 98% accuracy, ensuring thorough vulnerability detection.',
  },
  {
    title: 'Speed',
    description: 'Complete audits in minutes, not days, drastically reducing project timelines.',
  },
  {
    title: 'Comprehensive',
    description: 'Detect vulnerabilities using OWASP and NIST standards for maximum security.',
  },
  {
    title: 'Advanced Detection',
    description: 'Automatically identify logic anomalies to ensure robust code integrity.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-start font-semibold">Superior</span>
          <h2 className="section-title mt-2">
            Why AI Auditing Outperforms Manual Reviews
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-4">
            AI auditing revolutionizes code review by providing unmatched accuracy and speed.
            Traditional methods are often hindered by human error and bias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-accent-start/20 p-2 rounded-full">
                  <CheckIcon className="w-6 h-6 text-accent-start" />
                </div>
                <h3 className="text-xl font-archivo ml-3">{feature.title}</h3>
              </div>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12"
        >
          <button className="btn-secondary">Learn More</button>
          <button className="btn-primary">Sign Up</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;