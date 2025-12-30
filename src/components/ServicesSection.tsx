import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Gem, Clock, ArrowRight, HelpCircle, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const minutesSessions = [
  { id: 'tarot-15', title: 'Tarot Reading - 15 min', duration: '15 min', price: 1100, description: 'Quick clarity session' },
  { id: 'tarot-30', title: 'Tarot Reading - 30 min', duration: '30 min', price: 2500, description: 'In-depth exploration' },
  { id: 'tarot-45', title: 'Tarot Reading - 45 min', duration: '45 min', price: 4100, description: 'Comprehensive reading' },
];

const questionsSessions = [
  { id: 'tarot-1q', title: 'Tarot Reading - 1 Question', questions: '1 Question', price: 333, description: 'Detailed single question reading' },
  { id: 'tarot-3q', title: 'Tarot Reading - 3 Questions', questions: '3 Questions', price: 1100, description: 'Multi-question deep dive' },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<'minutes' | 'questions'>('minutes');
  const navigate = useNavigate();

  return (
    <section id="services" className="section-padding bg-cream-dark" ref={ref}>
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs sm:text-sm font-body tracking-wide-premium uppercase text-sage mb-3 sm:mb-4 block">
            Our Offerings
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-forest mb-3 sm:mb-4">
            Services
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-4">
            Each session is a collaborative exploration, tailored to your unique needs 
            and conducted with the utmost professionalism.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tarot Reading Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="group relative bg-cream rounded-lg border border-border p-6 md:p-8 hover:shadow-medium transition-all duration-500 overflow-hidden"
          >
            {/* Icon & Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sage/20 text-forest group-hover:bg-forest group-hover:text-cream transition-all duration-300">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="text-xs sm:text-sm tracking-wide-premium uppercase text-sage block mb-1">
                  Intuitive Guidance
                </span>
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-forest">
                  Tarot Reading
                </h3>
              </div>
            </div>

            {/* Free Question Banner */}
            <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gold/10 rounded-lg border border-gold/30 mb-4 sm:mb-6">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-forest">Free Yes/No Question</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">Start your journey with a complimentary reading</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto text-gold hover:text-white text-[10px] sm:text-xs px-2 sm:px-3 h-7 sm:h-8"
                onClick={() => navigate('/book', { 
                  state: { 
                    preSelectedServices: [
                      { id: 'tarot-free', title: 'Free Yes/No Question', price: 0, details: 'Free' }
                    ],
                    activeTab: 'questions'
                  }
                })}
              >
                Try Free
              </Button>
            </div>

            {/* Tab Switcher */}
            <div className="flex bg-cream-dark rounded-lg p-1 mb-4 sm:mb-6">
              <button
                onClick={() => setActiveTab('minutes')}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'minutes'
                    ? 'bg-forest text-white  shadow-sm'
                    : 'text-muted-foreground hover:text-forest'
                }`}
              >
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">By</span> Duration
              </button>
              <button
                onClick={() => setActiveTab('questions')}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'questions'
                    ? 'bg-forest text-white shadow-sm'
                    : 'text-muted-foreground hover:text-forest'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">By</span> Questions
              </button>
            </div>

            {/* Sessions List */}
            <div className="space-y-3">
              {activeTab === 'minutes' ? (
                minutesSessions.map((session) => (
                  <div
                    key={session.duration}
                    className="flex items-center justify-between p-3 sm:p-4 bg-cream-dark/50 rounded-lg border border-border/80 hover:border-gold transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <div className="flex items-center gap-1.5 text-forest font-medium text-sm sm:text-base">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sage" />
                        {session.duration}
                      </div>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">
                        {session.description}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-heading text-base sm:text-lg text-forest">₹{session.price}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-forest hover:text-white h-7 sm:h-8 px-2 sm:px-3 text-xs sm:text-sm"
                        onClick={() => navigate('/book', { 
                          state: { 
                            preSelectedServices: [
                              { 
                                id: session.id, 
                                title: session.title, 
                                price: session.price, 
                                details: session.duration 
                              }
                            ],
                            activeTab: 'minutes'
                          }
                        })}
                      >
                        Book
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-0.5 sm:ml-1" />
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                questionsSessions.map((session) => (
                  <div
                    key={session.questions}
                    className="flex items-center justify-between p-3 sm:p-4 bg-cream-dark/50 rounded-lg border border-border/80 hover:border-gold transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <div className="flex items-center gap-1.5 text-forest font-medium text-sm sm:text-base">
                        <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sage" />
                        {session.questions}
                      </div>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">
                        {session.description}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-heading text-base sm:text-lg text-forest">₹{session.price}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-forest hover:text-white h-7 sm:h-8 px-2 sm:px-3 text-xs sm:text-sm"
                        onClick={() => navigate('/book', { 
                          state: { 
                            preSelectedServices: [
                              { 
                                id: session.id, 
                                title: session.title, 
                                price: session.price, 
                                details: session.questions 
                              }
                            ],
                            activeTab: 'questions'
                          }
                        })}
                      >
                        Book
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-0.5 sm:ml-1" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Gold accent on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-lg origin-left" />
          </motion.div>

          {/* Crystal Consultation Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-cream rounded-lg border border-border p-6 md:p-8 hover:shadow-medium transition-all duration-500 overflow-hidden"
          >
            {/* Icon & Header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-sage/20 text-forest group-hover:bg-forest group-hover:text-cream transition-all duration-300">
                <Gem className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="text-xs sm:text-sm tracking-wide-premium uppercase text-sage block mb-1">
                  Bespoke Alignment
                </span>
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-forest">
                  Crystal Consultation
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Custom gemstone pairing and energetic architecture for your workspace or home. 
              Create environments that support your intentions and enhance your daily practice.
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-6 sm:mb-8">
              {['Custom Stone Selection', 'Workspace Design', 'Home Harmonization', 'Energy Cleansing Guidance'].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-forest">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-border">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  90 min
                </div>
                <span className="font-heading text-lg sm:text-xl text-forest">₹2,500</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-forest hover:text-white group/btn h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm"
                onClick={() => navigate('/book', { 
                  state: { 
                    preSelectedServices: [
                      { 
                        id: 'crystal', 
                        title: 'Crystal Consultation', 
                        price: 2500, 
                        details: '90 min' 
                      }
                    ]
                  }
                })}
              >
                Book
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Gold accent on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-lg origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
