
interface BadgeSkillProps {
  namaSkill: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
}

function BadgeSkill({ namaSkill, level }: BadgeSkillProps) {
  const warna = {
    Pemula: '#4CAF50',
    Menengah: '#2196F3',
    Mahir: '#9C27B0',
  };

  return (
    <span
      className="badge-skill"
      style={{ backgroundColor: warna[level] }}
    >
      {namaSkill} - {level}
    </span>
  );
}

export default BadgeSkill;
