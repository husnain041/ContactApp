import { useRef, useState } from 'react';
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const projectList = [
  {
    title: 'Power Distribution Network Optimization (ETAP)',
    tools: 'ETAP',
    description:
      'Designed and simulated a 40-house low-voltage distribution system with EV integration analysis.',
    contribution:
      'Load flow analysis, transformer sizing, and voltage stability optimization.',
    result:
      'Identified optimal transformer capacity and feeder configuration for system efficiency.',
  },
  {
    title: 'IoT-Based Cardiac Health Monitoring System',
    tools: 'IoT Platforms, Machine Learning, Python',
    description:
      'Built a real-time health monitoring system for drivers using IoT and machine learning.',
    contribution:
      'Designed system architecture, anomaly detection logic, and alert triggering mechanism.',
    result:
      'Detected vital sign anomalies with configurable sensitivity.',
  },
  {
    title: 'Industrial Power System Analysis (ETAP)',
    tools: 'ETAP, Electrical Simulation',
    description:
      'Conducted complete industrial studies including load flow, short-circuit, and motor starting.',
    contribution:
      'Performed fault analysis and capacitor placement optimization.',
    result:
      'Identified bottlenecks and recommended stability improvements.',
  },
  {
    title: 'PLC & SCADA Automation (Karachi Automation)',
    tools: 'PLC Programming, SCADA, Automation',
    description: 'Implemented industrial automation control with PLC logic and SCADA dashboards.',
    contribution:
      'Programmed controllers, designed interfaces, and streamlined manual operations.',
    result: 'Improved monitoring efficiency and reduced operational overhead.',
  },
  {
    title: 'DC Motor Speed Control with PID',
    tools: 'MATLAB, PID Control Theory',
    description: 'Developed real-time motor speed regulation under variable load conditions.',
    contribution: 'Tuned PID, built feedback design, and tested across load variations.',
    result: 'Achieved stable speed performance across the operating range.',
  },
];

const skills = {
  'Software & Simulation': [
    'ETAP',
    'PSS/E',
    'MATLAB',
    'PVSyst',
    'AutoCAD',
    'Synergi Electric',
  ],
  'Technical Expertise': [
    'Power System Analysis & Load Flow Studies',
    'Short-Circuit Analysis',
    'PLC Programming & SCADA Design',
    'Solar PV System Design',
    'Control Systems (PID, Pitch Control)',
    'Electrical Load Estimation',
    'Fault Diagnosis & Troubleshooting',
    'Transformer Optimization',
  ],
  'Core Interests': [
    'Renewable Energy Integration',
    'Smart Grid & Distribution Networks',
    'Industrial Automation',
    'System Optimization',
  ],
};

const certifications = [
  'Lean Six Sigma White Belt',
  'ETAP Software Certification',
  'Solar Energy System Design',
  'MATLAB and Machine Learning Onramp',
  'AutoCAD Certification',
  'Communication and Soft Skills Training',
];

function App() {
  const scrollRef = useRef<ScrollView>(null);
  const [projectOffset, setProjectOffset] = useState(0);

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView ref={scrollRef} contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.tag}>HUSNAIN GHAFFAR</Text>
          <Text style={styles.heroTitle}>Electrical Engineer | Power Systems & Renewable Energy</Text>
          <Text style={styles.heroSubtitle}>
            Designing efficient power systems. Building renewable energy solutions.
          </Text>
          <View style={styles.buttonRow}>
            <Pressable
              onPress={() => scrollRef.current?.scrollTo({ y: projectOffset, animated: true })}
              style={[styles.button, styles.primaryButton]}>
              <Text style={styles.primaryButtonText}>View My Work</Text>
            </Pressable>
            <Pressable
              onPress={() => openLink('https://github.com/husnain041')}
              style={[styles.button, styles.secondaryButton]}>
              <Text style={styles.secondaryButtonText}>Download Resume</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.bodyText}>
            I am a Junior Electrical Engineer at TurkPak International focused on power
            distribution analysis, load flow studies, and renewable energy systems. I work with
            ETAP, PSS/E, MATLAB, and SCADA to build reliable and scalable systems. My project work
            has delivered measurable performance gains, including a 10% voltage profile improvement.
          </Text>
          <Text style={styles.listItem}>• Power system modeling and analysis (ETAP, PSS/E)</Text>
          <Text style={styles.listItem}>• Solar PV system design and integration</Text>
          <Text style={styles.listItem}>• Industrial automation and SCADA programming</Text>
          <Text style={styles.listItem}>• Load forecasting and distribution optimization</Text>
        </View>

        <View style={styles.card} onLayout={event => setProjectOffset(event.nativeEvent.layout.y)}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {projectList.map(project => (
            <View key={project.title} style={styles.projectCard}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectLine}>Tools: {project.tools}</Text>
              <Text style={styles.projectLine}>Overview: {project.description}</Text>
              <Text style={styles.projectLine}>What I Did: {project.contribution}</Text>
              <Text style={styles.projectLine}>Result: {project.result}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          <View style={styles.timelineItem}>
            <Text style={styles.timelineTitle}>
              TurkPak International | Junior Electrical Engineer (Sep 2025 – Present)
            </Text>
            <Text style={styles.listItem}>• Load flow and short-circuit studies with ETAP & PSS/E</Text>
            <Text style={styles.listItem}>• Feeder load forecasting using Synergi Electric</Text>
            <Text style={styles.listItem}>• Achieved 10% voltage profile improvement</Text>
          </View>
          <View style={styles.timelineItem}>
            <Text style={styles.timelineTitle}>Internships</Text>
            <Text style={styles.listItem}>• NESPAK: Solar PV grid-connected systems and SCADA</Text>
            <Text style={styles.listItem}>• PEL: Power transformer design and testing</Text>
            <Text style={styles.listItem}>• Karachi Automation: PLC and SCADA programming</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {Object.entries(skills).map(([category, entries]) => (
            <View key={category} style={styles.skillGroup}>
              <Text style={styles.skillTitle}>{category}</Text>
              {entries.map(entry => (
                <Text key={entry} style={styles.listItem}>
                  • {entry}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.map(item => (
            <Text key={item} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Pressable onPress={() => openLink('mailto:husnainghaffar87@gmail.com')}>
            <Text style={styles.linkText}>📧 husnainghaffar87@gmail.com</Text>
          </Pressable>
          <Pressable onPress={() => openLink('tel:+923247714196')}>
            <Text style={styles.linkText}>📱 +92-324-7714196</Text>
          </Pressable>
          <Pressable onPress={() => openLink('https://www.linkedin.com/in/husnain-ghaffar/')}>
            <Text style={styles.linkText}>💼 LinkedIn Profile</Text>
          </Pressable>
          <Pressable onPress={() => openLink('https://github.com/husnain041')}>
            <Text style={styles.linkText}>💻 GitHub Profile</Text>
          </Pressable>
          <Text style={styles.cta}>
            Open to opportunities in power systems engineering and renewable energy. Let&apos;s
            build something efficient.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#071225',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 14,
  },
  hero: {
    marginTop: 8,
    padding: 18,
    borderRadius: 16,
    backgroundColor: '#0f1f3d',
    borderWidth: 1,
    borderColor: '#1d3763',
  },
  tag: {
    color: '#74d6ff',
    fontWeight: '700',
    letterSpacing: 1.1,
    marginBottom: 8,
  },
  heroTitle: {
    color: '#f1f5ff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: '#b7c3db',
    fontSize: 15,
    marginBottom: 14,
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  primaryButton: {
    backgroundColor: '#00b7ff',
  },
  secondaryButton: {
    backgroundColor: '#0d2947',
    borderWidth: 1,
    borderColor: '#00b7ff',
  },
  primaryButtonText: {
    color: '#001226',
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: '#73d4ff',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#0f1c35',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1a2a4a',
  },
  sectionTitle: {
    color: '#f1f5ff',
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 10,
  },
  bodyText: {
    color: '#c6d2ea',
    lineHeight: 21,
    marginBottom: 8,
  },
  projectCard: {
    backgroundColor: '#152748',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  projectTitle: {
    color: '#eff5ff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  projectLine: {
    color: '#c3d2ef',
    marginBottom: 4,
    lineHeight: 20,
  },
  timelineItem: {
    marginBottom: 10,
  },
  timelineTitle: {
    color: '#eff5ff',
    fontWeight: '700',
    marginBottom: 6,
  },
  skillGroup: {
    marginBottom: 10,
  },
  skillTitle: {
    color: '#7ad8ff',
    fontWeight: '700',
    marginBottom: 4,
  },
  listItem: {
    color: '#c7d3ea',
    marginBottom: 3,
    lineHeight: 20,
  },
  linkText: {
    color: '#7ad8ff',
    marginBottom: 8,
    fontWeight: '600',
  },
  cta: {
    marginTop: 10,
    color: '#eef5ff',
    fontWeight: '700',
    lineHeight: 22,
  },
});

export default App;
