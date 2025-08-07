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
              <Icon name="ShoppingCart" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">AutoResto</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#equipment" className="text-muted-foreground hover:text-primary transition-colors">Оборудование</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex">Бесплатная консультация</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 text-sm">Автоматизация под ключ за 1 день</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Автоматизация
                <span className="text-primary"> ресторанов</span>
                <br />под ключ
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Приступайте к автоматизации своего бизнеса, используя наш экспертный опыт 
                и передовые инструменты. Готовые решения для кафе, ресторанов и доставки.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="px-8 py-3 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Icon name="Clock" size={16} className="mr-2" />
                Запуск в день обращения • Поддержка 24/7 • Гарантия до 12 месяцев
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/5d5f3217-eb71-4ee3-b0a2-5d9d7ad00fcc.jpg" 
                alt="POS-терминал в ресторане" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Автоматизированных точек</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Техподдержка</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1 день</div>
              <div className="text-muted-foreground">Быстрый запуск</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Комплексные решения для вашего бизнеса</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Программные продукты закрывают все потребности. Единое решение для всех процессов: 
              зал, кухня, склад, персонал, доставка, аналитика.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="Monitor" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Удобная касса</h3>
              <p className="text-sm text-muted-foreground">Интуитивный интерфейс и быстрое обслуживание</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="Smartphone" size={48} className="text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Мобильный официант</h3>
              <p className="text-sm text-muted-foreground">Принимайте заказы прямо у столика</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="MenuSquare" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Электронное меню</h3>
              <p className="text-sm text-muted-foreground">QR-коды и онлайн заказы</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="ChefHat" size={48} className="text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Кухонный экран</h3>
              <p className="text-sm text-muted-foreground">Контроль времени приготовления</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="Gift" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Бонусы и скидки</h3>
              <p className="text-sm text-muted-foreground">Программы лояльности</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Icon name="BarChart3" size={48} className="text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Аналитика</h3>
              <p className="text-sm text-muted-foreground">Отчеты и бизнес-аналитика</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              От консультации до полного запуска автоматизации
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <Icon name="Settings" size={48} className="text-primary mb-4" />
                <CardTitle>Автоматизация под ключ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Полная настройка системы: от выбора программы до обучения персонала
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Анализ бизнес-процессов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Подбор оборудования
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Установка и настройка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Обучение персонала
                  </li>
                </ul>
                <Button className="w-full">Заказать</Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-primary border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Популярно</Badge>
              </div>
              <CardHeader>
                <Icon name="Laptop" size={48} className="text-secondary mb-4" />
                <CardTitle>Программное обеспечение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  IIKO, RKeeper, СБИС - выберем оптимальное решение для вашего бизнеса
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Лицензирование ПО
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Настройка меню
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Интеграции с агрегаторами
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Обновления и поддержка
                  </li>
                </ul>
                <Button className="w-full">Подобрать ПО</Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <Icon name="Package" size={48} className="text-primary mb-4" />
                <CardTitle>Кассовое оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Готовые комплекты оборудования с доставкой и установкой
                </p>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    POS-терминалы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Фискальные регистраторы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Сканеры штрихкодов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-secondary mr-2" />
                    Рассрочка 0%
                  </li>
                </ul>
                <Button className="w-full">Выбрать комплект</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Интеграция с популярными сервисами</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Подключение к Яндекс.Еде, Delivery Club и другим платформам доставки. 
                Готовые рестораны с расширенным функционалом и большим охватом доставок.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">Я</span>
                  </div>
                  <div className="font-semibold">Яндекс.Еда</div>
                </div>
                <div className="text-center">
                  <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">DC</span>
                  </div>
                  <div className="font-semibold">Delivery Club</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon name="CreditCard" size={24} className="text-white" />
                  </div>
                  <div className="font-semibold">Эквайринг</div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Receipt" size={24} className="text-white" />
                  </div>
                  <div className="font-semibold">ЕГАИС</div>
                </div>
              </div>
              
              <Button className="px-8 py-3">
                Подключить интеграции
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/img/b0dbf8fc-2301-4520-a60b-d8d8612b4d4c.jpg" 
                alt="Автоматизация ресторана" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Кассовое и торговое оборудование</h2>
            <p className="text-xl text-muted-foreground">
              Готовые комплекты под ключ с доставкой по всей России
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <Icon name="Monitor" size={48} className="text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-3">POS-моноблоки</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Сенсорные моноблоки с встроенным принтером чеков
              </p>
              <div className="text-lg font-bold text-primary mb-2">от 45 000 ₽</div>
              <Button variant="outline" className="w-full">Подробнее</Button>
            </Card>

            <Card className="p-6">
              <Icon name="Receipt" size={48} className="text-secondary mb-4" />
              <h4 className="text-lg font-semibold mb-3">Онлайн-кассы</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Фискальные регистраторы с ОФД и поддержкой 54-ФЗ
              </p>
              <div className="text-lg font-bold text-primary mb-2">от 18 000 ₽</div>
              <Button variant="outline" className="w-full">Подробнее</Button>
            </Card>

            <Card className="p-6">
              <Icon name="ScanLine" size={48} className="text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-3">Сканеры штрихкода</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Проводные и беспроводные сканеры для быстрого учета
              </p>
              <div className="text-lg font-bold text-primary mb-2">от 3 500 ₽</div>
              <Button variant="outline" className="w-full">Подробнее</Button>
            </Card>

            <Card className="p-6">
              <Icon name="Scale" size={48} className="text-secondary mb-4" />
              <h4 className="text-lg font-semibold mb-3">Торговые весы</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Электронные весы с печатью этикеток
              </p>
              <div className="text-lg font-bold text-primary mb-2">от 12 000 ₽</div>
              <Button variant="outline" className="w-full">Подробнее</Button>
            </Card>

            <Card className="p-6">
              <Icon name="CreditCard" size={48} className="text-primary mb-4" />
              <h4 className="text-lg font-semibold mb-3">Эквайринг</h4>
              <p className="text-sm text-muted-foreground mb-4">
                POS-терминалы для приема банковских карт
              </p>
              <div className="text-lg font-bold text-primary mb-2">от 8 000 ₽</div>
              <Button variant="outline" className="w-full">Подробнее</Button>
            </Card>

            <Card className="p-6">
              <Icon name="Package" size={48} className="text-secondary mb-4" />
              <h4 className="text-lg font-semibold mb-3">Готовые комплекты</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Полные комплекты оборудования под ключ
              </p>
              <div className="text-lg font-bold text-primary mb-2">от 89 000 ₽</div>
              <Button variant="outline" className="w-full">Подробнее</Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Рассрочка от банка Тинькофф на 6 и 12 месяцев без переплаты
            </p>
            <Button size="lg" className="px-8 py-3">
              Получить коммерческое предложение
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">6 причин доверить установку именно нам</h2>
            <p className="text-lg text-muted-foreground">
              На самом деле причин намного больше, но наш программист сказал, что шести будет достаточно 😊
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Быстрый запуск</h3>
              <p className="text-muted-foreground">
                Мы можем запустить вас в день обращения с регистрацией кассы, 
                обучением и полной настройкой
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Любой бюджет</h3>
              <p className="text-muted-foreground">
                Возможность подобрать автоматизацию под любой бюджет. 
                Для совсем маленьких и для больших заведений
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Поддержка 24/7</h3>
              <p className="text-muted-foreground">
                Круглосуточная техподдержка и выезд специалиста 
                в случае невозможности решить вопрос удаленно
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">ГосСистемы+</h3>
              <p className="text-muted-foreground">
                ЕГАИС, Меркурий и маркировка под контролем. 
                Штрафы не страшны, когда запускаетесь с нами
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Cloud" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Облачные сервисы</h3>
              <p className="text-muted-foreground">
                Ваши данные надежно хранятся в облаке 
                с ежедневным резервным копированием
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Link" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">API интеграции</h3>
              <p className="text-muted-foreground">
                Подключим любые сервисы: Яндекс.Еда, Delivery Club, 
                эквайринг, системы лояльности
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Мы знаем ответы на ваши вопросы</h2>
            <p className="text-xl text-muted-foreground">
              Самые популярные вопросы о автоматизации ресторанного бизнеса
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Только открываюсь и не знаю, что выбрать?</AccordionTrigger>
                <AccordionContent>
                  Наши менеджеры помогут подобрать необходимое оборудование, расскажут об особенностях учета, 
                  помогут с созданием финансовой модели, проведут обучение персонала. 
                  А главное — мы сделаем учет корректным с первого дня работы.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Можно ли взять комплект в рассрочку?</AccordionTrigger>
                <AccordionContent>
                  Да, можем оформить рассрочку на 6 и 12 месяцев от банка-партнера «Тинькофф» без переплаты. 
                  Рассрочка доступна только для граждан РФ старше 18 лет.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Почему у вас дешевле, чем у других?</AccordionTrigger>
                <AccordionContent>
                  Мы работаем напрямую с производителями в Китае и Южной Корее. 
                  Многолетнее сотрудничество с поставщиками позволяет получать лучшие цены. 
                  Большие объемы закупок дают дополнительные скидки, которыми мы делимся с клиентами.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Что такое ЕГАИС, Меркурий, Честный знак?</AccordionTrigger>
                <AccordionContent>
                  Это государственные системы учета товаров. ЕГАИС — для алкоголя, 
                  Меркурий — для продуктов питания, Честный знак — для маркированных товаров. 
                  Мы полностью настроим все системы, вам нужно только получить Рутокен в налоговой.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>С какими программами вы работаете?</AccordionTrigger>
                <AccordionContent>
                  Мы настраиваем и проводим обучение по программам: IIKO и RKeeper для ресторанов, 
                  СБИС для магазинов. Поможем выбрать оптимальное решение под ваш тип бизнеса.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Работаете ли вы в регионах?</AccordionTrigger>
                <AccordionContent>
                  По Москве и МО выезжаем с установкой лично. В регионы отправляем 
                  полностью настроенное оборудование транспортной компанией. 
                  Вам нужно только включить и подключить к интернету, 
                  а мы проведем обучение через удаленный доступ.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>За сколько дней до открытия нужно обращаться?</AccordionTrigger>
                <AccordionContent>
                  Для настройки комплекта под ключ нужно 2-3 рабочих дня. 
                  Рекомендуем делать установку за 7 дней до открытия — 
                  это позволит спокойно завести товары и потренироваться на кассе.
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
            <h2 className="text-4xl font-bold mb-4">Готовы автоматизировать бизнес?</h2>
            <p className="text-xl text-muted-foreground">
              Получите бесплатную консультацию и коммерческое предложение
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-8">Контакты</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-lg">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Офис в Москве</h4>
                    <p className="text-muted-foreground">
                      ул. Тверская, д. 15, офис 301<br />
                      м. Тверская, Пушкинская
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@autoresto.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Icon name="MessageSquare" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Заказать консультацию</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Оставьте заявку и мы перезвоним в течение 15 минут
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Имя" />
                  <Input placeholder="Фамилия" />
                </div>
                <Input placeholder="Телефон" type="tel" />
                <Input placeholder="Название заведения" />
                <Textarea placeholder="Опишите ваши потребности" rows={4} />
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <input type="checkbox" id="agree" />
                  <label htmlFor="agree">
                    Согласен с обработкой персональных данных
                  </label>
                </div>
                <Button className="w-full">
                  Получить консультацию
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
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="ShoppingCart" size={24} />
                <span className="text-xl font-bold">AutoResto</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Автоматизация ресторанов и магазинов под ключ
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Автоматизация под ключ</li>
                <li>Кассовое оборудование</li>
                <li>Программное обеспечение</li>
                <li>Интеграции с сервисами</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ПО</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>IIKO</li>
                <li>RKeeper</li>
                <li>СБИС</li>
                <li>Консультация по выбору</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@autoresto.ru</li>
                <li>Москва, ул. Тверская, 15</li>
                <li>Работаем по всей России</li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8 bg-primary-foreground/20" />
          
          <div className="text-center text-sm text-primary-foreground/60">
            © 2024 AutoResto. Автоматизация ресторанов под ключ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;