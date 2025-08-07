import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">24FORTIS</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex">Консультация</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 text-sm">Финансовые решения нового поколения</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Инвестиции в
            <span className="text-primary"> будущее</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональные финансовые услуги, индивидуальные стратегии инвестирования 
            и консультации для роста вашего капитала
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3 text-lg">
              <Icon name="ArrowRight" size={20} className="ml-2" />
              Начать инвестировать
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₽250M+</div>
              <div className="text-muted-foreground">Управляемых активов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">18.5%</div>
              <div className="text-muted-foreground">Средняя доходность</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр финансовых решений для частных и корпоративных клиентов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="TrendingUp" size={48} className="text-primary mb-4" />
                <CardTitle className="text-xl">Управление портфелем</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Профессиональное управление вашим инвестиционным портфелем 
                  с учетом индивидуальных целей и рисков
                </p>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-secondary mb-4" />
                <CardTitle className="text-xl">Финансовое планирование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Комплексное планирование финансов: от накоплений до пенсии, 
                  защита от рисков и налоговое планирование
                </p>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="DollarSign" size={48} className="text-primary mb-4" />
                <CardTitle className="text-xl">Консультации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Персональные консультации по инвестиционным стратегиям, 
                  анализ рынков и рекомендации экспертов
                </p>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Chart Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Рост вашего капитала</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда экспертов использует проверенные стратегии и современные 
                технологии анализа для максимизации доходности ваших инвестиций
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-secondary mr-3" />
                  <span>Диверсифицированные портфели</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-secondary mr-3" />
                  <span>Управление рисками</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-secondary mr-3" />
                  <span>Прозрачная отчетность</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={20} className="text-secondary mr-3" />
                  <span>Персональный подход</span>
                </li>
              </ul>
              <Button className="px-8 py-3">
                Получить консультацию
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/5dee8e68-c54f-4f27-abad-2e0aa81907fe.jpg" 
                alt="Финансовая аналитика" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/6a30812f-fba2-4c26-a584-2b38c00965fd.jpg" 
                alt="Офис компании" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h3 className="text-3xl font-bold mb-6">Надежный партнер с 2008 года</h3>
              <p className="text-lg text-muted-foreground mb-6">
                24FORTIS — это команда профессионалов с многолетним опытом работы на 
                финансовых рынках. Мы помогаем частным и корпоративным клиентам 
                достигать финансовых целей через грамотные инвестиционные решения.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Специалистов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">₽250M+</div>
                  <div className="text-sm text-muted-foreground">Активов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Ответы на основные вопросы об инвестициях и наших услугах
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Какая минимальная сумма для инвестирования?</AccordionTrigger>
                <AccordionContent>
                  Минимальная сумма для начала инвестирования составляет 100 000 рублей. 
                  Это позволяет создать диверсифицированный портфель и обеспечить 
                  эффективное управление рисками.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Какие гарантии доходности вы даете?</AccordionTrigger>
                <AccordionContent>
                  Мы не даем гарантий доходности, так как инвестиции связаны с рисками. 
                  Однако наши стратегии основаны на глубоком анализе рынков и 
                  многолетнем опыте управления активами.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Как часто предоставляется отчетность?</AccordionTrigger>
                <AccordionContent>
                  Клиенты получают подробные отчеты о состоянии портфеля ежемесячно. 
                  Также доступен онлайн-кабинет для отслеживания показателей в режиме реального времени.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Можно ли досрочно вывести средства?</AccordionTrigger>
                <AccordionContent>
                  Да, средства можно вывести в любое время. Срок обработки заявки на вывод 
                  составляет 1-3 рабочих дня в зависимости от типа активов в портфеле.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы начать инвестировать? Свяжитесь с нашими экспертами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">
                      Москва, ул. Тверская, д. 12, стр. 1<br />
                      БЦ "Галерея Актер", офис 15
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@24fortis.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Время работы</h4>
                    <p className="text-muted-foreground">
                      Пн-Пт: 9:00 - 19:00<br />
                      Сб-Вс: по записи
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Заявка на консультацию</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Имя" />
                  <Input placeholder="Фамилия" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Телефон" type="tel" />
                <Textarea placeholder="Сообщение" rows={4} />
                <Button className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="TrendingUp" size={24} />
                <span className="text-xl font-bold">24FORTIS</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональные финансовые услуги и инвестиционные решения
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Управление портфелем</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Финансовое планирование</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">О нас</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Команда</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@24fortis.ru</li>
                <li>Москва, ул. Тверская, 12</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center text-sm text-primary-foreground/60">
            © 2024 24FORTIS. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;