export default function Features() {
  const features = [
    {
      icon: '🍲',
      title: 'だし',
      description: '最適した風味と優れた深さで、上品な味わいを実現。',
      image: 'https://images.pexels.com/photos/6615842/pexels-photo-6615842.jpeg'
    },
    {
      icon: '⭘',
      title: 'そば',
      description: 'のどごしと香りで大切にした。毎日新しくなる。',
      image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg'
    },
    {
      icon: '⏱',
      title: 'はやさと気軽さ',
      description: '立ちながらのことも心地いい堆さを。いつでも気軽に立ち寄れること。',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg'
    }
  ];

  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-700 text-sm font-semibold tracking-wider mb-2">こだわり</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            一杯に込めた、３つのこだわり。
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              <div className="p-6">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
