import React from 'react';
import type { HeroIconName } from './HeroIconName';

export const iconDict: Record<
	HeroIconName,
	React.LazyExoticComponent<
		(props: React.SVGProps<SVGSVGElement>) => JSX.Element
	>
> = {
	CommandLineIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CommandLineIcon.js'),
	),
	AcademicCapIcon: React.lazy(
		() => import('@heroicons/react/24/outline/AcademicCapIcon.js'),
	),
	AdjustmentsHorizontalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/AdjustmentsHorizontalIcon.js'),
	),
	AdjustmentsVerticalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/AdjustmentsVerticalIcon.js'),
	),
	ArchiveBoxArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArchiveBoxArrowDownIcon.js'),
	),
	ArchiveBoxXMarkIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArchiveBoxXMarkIcon.js'),
	),
	ArchiveBoxIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArchiveBoxIcon.js'),
	),
	ArrowDownCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownCircleIcon.js'),
	),
	ArrowDownLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownLeftIcon.js'),
	),
	ArrowDownOnSquareStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownOnSquareStackIcon.js'),
	),
	ArrowDownOnSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownOnSquareIcon.js'),
	),
	ArrowDownRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownRightIcon.js'),
	),
	ArrowDownTrayIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownTrayIcon.js'),
	),
	ArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowDownIcon.js'),
	),
	ArrowLeftCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLeftCircleIcon.js'),
	),
	ArrowLeftOnRectangleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLeftOnRectangleIcon.js'),
	),
	ArrowLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLeftIcon.js'),
	),
	ArrowLongDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLongDownIcon.js'),
	),
	ArrowLongLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLongLeftIcon.js'),
	),
	ArrowLongRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLongRightIcon.js'),
	),
	ArrowLongUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowLongUpIcon.js'),
	),
	ArrowPathRoundedSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowPathRoundedSquareIcon.js'),
	),
	ArrowPathIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowPathIcon.js'),
	),
	ArrowRightCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowRightCircleIcon.js'),
	),
	ArrowRightOnRectangleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowRightOnRectangleIcon.js'),
	),
	ArrowRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowRightIcon.js'),
	),
	ArrowSmallDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowSmallDownIcon.js'),
	),
	ArrowSmallLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowSmallLeftIcon.js'),
	),
	ArrowSmallRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowSmallRightIcon.js'),
	),
	ArrowSmallUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowSmallUpIcon.js'),
	),
	ArrowTopRightOnSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowTopRightOnSquareIcon.js'),
	),
	ArrowTrendingDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowTrendingDownIcon.js'),
	),
	ArrowTrendingUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowTrendingUpIcon.js'),
	),
	ArrowUpCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpCircleIcon.js'),
	),
	ArrowUpLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpLeftIcon.js'),
	),
	ArrowUpOnSquareStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpOnSquareStackIcon.js'),
	),
	ArrowUpOnSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpOnSquareIcon.js'),
	),
	ArrowUpRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpRightIcon.js'),
	),
	ArrowUpTrayIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpTrayIcon.js'),
	),
	ArrowUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUpIcon.js'),
	),
	ArrowUturnDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUturnDownIcon.js'),
	),
	ArrowUturnLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUturnLeftIcon.js'),
	),
	ArrowUturnRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUturnRightIcon.js'),
	),
	ArrowUturnUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowUturnUpIcon.js'),
	),
	ArrowsPointingInIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowsPointingInIcon.js'),
	),
	ArrowsPointingOutIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowsPointingOutIcon.js'),
	),
	ArrowsRightLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowsRightLeftIcon.js'),
	),
	ArrowsUpDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ArrowsUpDownIcon.js'),
	),
	AtSymbolIcon: React.lazy(
		() => import('@heroicons/react/24/outline/AtSymbolIcon.js'),
	),
	BackspaceIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BackspaceIcon.js'),
	),
	BackwardIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BackwardIcon.js'),
	),
	BanknotesIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BanknotesIcon.js'),
	),
	Bars2Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Bars2Icon.js'),
	),
	Bars3BottomLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Bars3BottomLeftIcon.js'),
	),
	Bars3BottomRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Bars3BottomRightIcon.js'),
	),
	Bars3CenterLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Bars3CenterLeftIcon.js'),
	),
	Bars3Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Bars3Icon.js'),
	),
	Bars4Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Bars4Icon.js'),
	),
	BarsArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BarsArrowDownIcon.js'),
	),
	BarsArrowUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BarsArrowUpIcon.js'),
	),
	Battery0Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Battery0Icon.js'),
	),
	Battery100Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Battery100Icon.js'),
	),
	Battery50Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Battery50Icon.js'),
	),
	BeakerIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BeakerIcon.js'),
	),
	BellAlertIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BellAlertIcon.js'),
	),
	BellSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BellSlashIcon.js'),
	),
	BellSnoozeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BellSnoozeIcon.js'),
	),
	BellIcon: React.lazy(() => import('@heroicons/react/24/outline/BellIcon.js')),
	BoltSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BoltSlashIcon.js'),
	),
	BoltIcon: React.lazy(() => import('@heroicons/react/24/outline/BoltIcon.js')),
	BookOpenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BookOpenIcon.js'),
	),
	BookmarkSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BookmarkSlashIcon.js'),
	),
	BookmarkSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BookmarkSquareIcon.js'),
	),
	BookmarkIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BookmarkIcon.js'),
	),
	BriefcaseIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BriefcaseIcon.js'),
	),
	BuildingLibraryIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BuildingLibraryIcon.js'),
	),
	BuildingOffice2Icon: React.lazy(
		() => import('@heroicons/react/24/outline/BuildingOffice2Icon.js'),
	),
	BuildingOfficeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BuildingOfficeIcon.js'),
	),
	BuildingStorefrontIcon: React.lazy(
		() => import('@heroicons/react/24/outline/BuildingStorefrontIcon.js'),
	),
	CakeIcon: React.lazy(() => import('@heroicons/react/24/outline/CakeIcon.js')),
	CalculatorIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CalculatorIcon.js'),
	),
	CalendarDaysIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CalendarDaysIcon.js'),
	),
	CalendarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CalendarIcon.js'),
	),
	CameraIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CameraIcon.js'),
	),
	ChartBarSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChartBarSquareIcon.js'),
	),
	ChartBarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChartBarIcon.js'),
	),
	ChartPieIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChartPieIcon.js'),
	),
	ChatBubbleBottomCenterTextIcon: React.lazy(
		() =>
			import('@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon.js'),
	),
	ChatBubbleBottomCenterIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleBottomCenterIcon.js'),
	),
	ChatBubbleLeftEllipsisIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon.js'),
	),
	ChatBubbleLeftRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleLeftRightIcon.js'),
	),
	ChatBubbleLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleLeftIcon.js'),
	),
	ChatBubbleOvalLeftEllipsisIcon: React.lazy(
		() =>
			import('@heroicons/react/24/outline/ChatBubbleOvalLeftEllipsisIcon.js'),
	),
	ChatBubbleOvalLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChatBubbleOvalLeftIcon.js'),
	),
	CheckBadgeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CheckBadgeIcon.js'),
	),
	CheckCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CheckCircleIcon.js'),
	),
	CheckIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CheckIcon.js'),
	),
	ChevronDoubleDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDoubleDownIcon.js'),
	),
	ChevronDoubleLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDoubleLeftIcon.js'),
	),
	ChevronDoubleRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDoubleRightIcon.js'),
	),
	ChevronDoubleUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDoubleUpIcon.js'),
	),
	ChevronDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronDownIcon.js'),
	),
	ChevronLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronLeftIcon.js'),
	),
	ChevronRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronRightIcon.js'),
	),
	ChevronUpDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronUpDownIcon.js'),
	),
	ChevronUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ChevronUpIcon.js'),
	),
	CircleStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CircleStackIcon.js'),
	),
	ClipboardDocumentCheckIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ClipboardDocumentCheckIcon.js'),
	),
	ClipboardDocumentListIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ClipboardDocumentListIcon.js'),
	),
	ClipboardDocumentIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ClipboardDocumentIcon.js'),
	),
	ClipboardIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ClipboardIcon.js'),
	),
	ClockIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ClockIcon.js'),
	),
	CloudArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CloudArrowDownIcon.js'),
	),
	CloudArrowUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CloudArrowUpIcon.js'),
	),
	CloudIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CloudIcon.js'),
	),
	CodeBracketSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CodeBracketSquareIcon.js'),
	),
	CodeBracketIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CodeBracketIcon.js'),
	),
	Cog6ToothIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Cog6ToothIcon.js'),
	),
	Cog8ToothIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Cog8ToothIcon.js'),
	),
	CogIcon: React.lazy(() => import('@heroicons/react/24/outline/CogIcon.js')),
	ComputerDesktopIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ComputerDesktopIcon.js'),
	),
	CpuChipIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CpuChipIcon.js'),
	),
	CreditCardIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CreditCardIcon.js'),
	),
	CubeTransparentIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CubeTransparentIcon.js'),
	),
	CubeIcon: React.lazy(() => import('@heroicons/react/24/outline/CubeIcon.js')),
	CurrencyBangladeshiIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyBangladeshiIcon.js'),
	),
	CurrencyDollarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyDollarIcon.js'),
	),
	CurrencyEuroIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyEuroIcon.js'),
	),
	CurrencyPoundIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyPoundIcon.js'),
	),
	CurrencyRupeeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyRupeeIcon.js'),
	),
	CurrencyYenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CurrencyYenIcon.js'),
	),
	CursorArrowRaysIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CursorArrowRaysIcon.js'),
	),
	CursorArrowRippleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/CursorArrowRippleIcon.js'),
	),
	DevicePhoneMobileIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DevicePhoneMobileIcon.js'),
	),
	DeviceTabletIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DeviceTabletIcon.js'),
	),
	DocumentArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentArrowDownIcon.js'),
	),
	DocumentArrowUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentArrowUpIcon.js'),
	),
	DocumentChartBarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentChartBarIcon.js'),
	),
	DocumentCheckIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentCheckIcon.js'),
	),
	DocumentDuplicateIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentDuplicateIcon.js'),
	),
	DocumentMagnifyingGlassIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentMagnifyingGlassIcon.js'),
	),
	DocumentMinusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentMinusIcon.js'),
	),
	DocumentPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentPlusIcon.js'),
	),
	DocumentTextIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentTextIcon.js'),
	),
	DocumentIcon: React.lazy(
		() => import('@heroicons/react/24/outline/DocumentIcon.js'),
	),
	EllipsisHorizontalCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EllipsisHorizontalCircleIcon.js'),
	),
	EllipsisHorizontalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EllipsisHorizontalIcon.js'),
	),
	EllipsisVerticalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EllipsisVerticalIcon.js'),
	),
	EnvelopeOpenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EnvelopeOpenIcon.js'),
	),
	EnvelopeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EnvelopeIcon.js'),
	),
	ExclamationCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ExclamationCircleIcon.js'),
	),
	ExclamationTriangleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ExclamationTriangleIcon.js'),
	),
	EyeSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/EyeSlashIcon.js'),
	),
	EyeIcon: React.lazy(() => import('@heroicons/react/24/outline/EyeIcon.js')),
	FaceFrownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FaceFrownIcon.js'),
	),
	FaceSmileIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FaceSmileIcon.js'),
	),
	FilmIcon: React.lazy(() => import('@heroicons/react/24/outline/FilmIcon.js')),
	FingerPrintIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FingerPrintIcon.js'),
	),
	FireIcon: React.lazy(() => import('@heroicons/react/24/outline/FireIcon.js')),
	FlagIcon: React.lazy(() => import('@heroicons/react/24/outline/FlagIcon.js')),
	FolderArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderArrowDownIcon.js'),
	),
	FolderMinusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderMinusIcon.js'),
	),
	FolderOpenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderOpenIcon.js'),
	),
	FolderPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderPlusIcon.js'),
	),
	FolderIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FolderIcon.js'),
	),
	ForwardIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ForwardIcon.js'),
	),
	FunnelIcon: React.lazy(
		() => import('@heroicons/react/24/outline/FunnelIcon.js'),
	),
	GifIcon: React.lazy(() => import('@heroicons/react/24/outline/GifIcon.js')),
	GiftTopIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GiftTopIcon.js'),
	),
	GiftIcon: React.lazy(() => import('@heroicons/react/24/outline/GiftIcon.js')),
	GlobeAltIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GlobeAltIcon.js'),
	),
	GlobeAmericasIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GlobeAmericasIcon.js'),
	),
	GlobeAsiaAustraliaIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GlobeAsiaAustraliaIcon.js'),
	),
	GlobeEuropeAfricaIcon: React.lazy(
		() => import('@heroicons/react/24/outline/GlobeEuropeAfricaIcon.js'),
	),
	HandRaisedIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HandRaisedIcon.js'),
	),
	HandThumbDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HandThumbDownIcon.js'),
	),
	HandThumbUpIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HandThumbUpIcon.js'),
	),
	HashtagIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HashtagIcon.js'),
	),
	HeartIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HeartIcon.js'),
	),
	HomeModernIcon: React.lazy(
		() => import('@heroicons/react/24/outline/HomeModernIcon.js'),
	),
	HomeIcon: React.lazy(() => import('@heroicons/react/24/outline/HomeIcon.js')),
	IdentificationIcon: React.lazy(
		() => import('@heroicons/react/24/outline/IdentificationIcon.js'),
	),
	InboxArrowDownIcon: React.lazy(
		() => import('@heroicons/react/24/outline/InboxArrowDownIcon.js'),
	),
	InboxStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/InboxStackIcon.js'),
	),
	InboxIcon: React.lazy(
		() => import('@heroicons/react/24/outline/InboxIcon.js'),
	),
	InformationCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/InformationCircleIcon.js'),
	),
	KeyIcon: React.lazy(() => import('@heroicons/react/24/outline/KeyIcon.js')),
	LanguageIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LanguageIcon.js'),
	),
	LifebuoyIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LifebuoyIcon.js'),
	),
	LightBulbIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LightBulbIcon.js'),
	),
	LinkIcon: React.lazy(() => import('@heroicons/react/24/outline/LinkIcon.js')),
	ListBulletIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ListBulletIcon.js'),
	),
	LockClosedIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LockClosedIcon.js'),
	),
	LockOpenIcon: React.lazy(
		() => import('@heroicons/react/24/outline/LockOpenIcon.js'),
	),
	MagnifyingGlassCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MagnifyingGlassCircleIcon.js'),
	),
	MagnifyingGlassMinusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MagnifyingGlassMinusIcon.js'),
	),
	MagnifyingGlassPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MagnifyingGlassPlusIcon.js'),
	),
	MagnifyingGlassIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MagnifyingGlassIcon.js'),
	),
	MapPinIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MapPinIcon.js'),
	),
	MapIcon: React.lazy(() => import('@heroicons/react/24/outline/MapIcon.js')),
	MegaphoneIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MegaphoneIcon.js'),
	),
	MicrophoneIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MicrophoneIcon.js'),
	),
	MinusCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MinusCircleIcon.js'),
	),
	MinusSmallIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MinusSmallIcon.js'),
	),
	MinusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MinusIcon.js'),
	),
	MoonIcon: React.lazy(() => import('@heroicons/react/24/outline/MoonIcon.js')),
	MusicalNoteIcon: React.lazy(
		() => import('@heroicons/react/24/outline/MusicalNoteIcon.js'),
	),
	NewspaperIcon: React.lazy(
		() => import('@heroicons/react/24/outline/NewspaperIcon.js'),
	),
	NoSymbolIcon: React.lazy(
		() => import('@heroicons/react/24/outline/NoSymbolIcon.js'),
	),
	PaintBrushIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PaintBrushIcon.js'),
	),
	PaperAirplaneIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PaperAirplaneIcon.js'),
	),
	PaperClipIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PaperClipIcon.js'),
	),
	PauseIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PauseIcon.js'),
	),
	PencilSquareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PencilSquareIcon.js'),
	),
	PencilIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PencilIcon.js'),
	),
	PhoneArrowDownLeftIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PhoneArrowDownLeftIcon.js'),
	),
	PhoneArrowUpRightIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PhoneArrowUpRightIcon.js'),
	),
	PhoneXMarkIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PhoneXMarkIcon.js'),
	),
	PhoneIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PhoneIcon.js'),
	),
	PhotoIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PhotoIcon.js'),
	),
	PlayPauseIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PlayPauseIcon.js'),
	),
	PlayIcon: React.lazy(() => import('@heroicons/react/24/outline/PlayIcon.js')),
	PlusCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PlusCircleIcon.js'),
	),
	PlusSmallIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PlusSmallIcon.js'),
	),
	PlusIcon: React.lazy(() => import('@heroicons/react/24/outline/PlusIcon.js')),
	PresentationChartBarIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PresentationChartBarIcon.js'),
	),
	PresentationChartLineIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PresentationChartLineIcon.js'),
	),
	PrinterIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PrinterIcon.js'),
	),
	PuzzlePieceIcon: React.lazy(
		() => import('@heroicons/react/24/outline/PuzzlePieceIcon.js'),
	),
	QrCodeIcon: React.lazy(
		() => import('@heroicons/react/24/outline/QrCodeIcon.js'),
	),
	QuestionMarkCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/QuestionMarkCircleIcon.js'),
	),
	QueueListIcon: React.lazy(
		() => import('@heroicons/react/24/outline/QueueListIcon.js'),
	),
	RadioIcon: React.lazy(
		() => import('@heroicons/react/24/outline/RadioIcon.js'),
	),
	ReceiptPercentIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ReceiptPercentIcon.js'),
	),
	ReceiptRefundIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ReceiptRefundIcon.js'),
	),
	RectangleGroupIcon: React.lazy(
		() => import('@heroicons/react/24/outline/RectangleGroupIcon.js'),
	),
	RectangleStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/RectangleStackIcon.js'),
	),
	RssIcon: React.lazy(() => import('@heroicons/react/24/outline/RssIcon.js')),
	ScaleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ScaleIcon.js'),
	),
	ScissorsIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ScissorsIcon.js'),
	),
	ServerStackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ServerStackIcon.js'),
	),
	ServerIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ServerIcon.js'),
	),
	ShareIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ShareIcon.js'),
	),
	ShieldCheckIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ShieldCheckIcon.js'),
	),
	ShieldExclamationIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ShieldExclamationIcon.js'),
	),
	ShoppingBagIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ShoppingBagIcon.js'),
	),
	ShoppingCartIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ShoppingCartIcon.js'),
	),
	SignalSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SignalSlashIcon.js'),
	),
	SignalIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SignalIcon.js'),
	),
	SparklesIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SparklesIcon.js'),
	),
	SpeakerWaveIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SpeakerWaveIcon.js'),
	),
	SpeakerXMarkIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SpeakerXMarkIcon.js'),
	),
	Square2StackIcon: React.lazy(
		() => import('@heroicons/react/24/outline/Square2StackIcon.js'),
	),
	Squares2X2Icon: React.lazy(
		() => import('@heroicons/react/24/outline/Squares2X2Icon.js'),
	),
	SquaresPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SquaresPlusIcon.js'),
	),
	StarIcon: React.lazy(() => import('@heroicons/react/24/outline/StarIcon.js')),
	StopIcon: React.lazy(() => import('@heroicons/react/24/outline/StopIcon.js')),
	SunIcon: React.lazy(() => import('@heroicons/react/24/outline/SunIcon.js')),
	SwatchIcon: React.lazy(
		() => import('@heroicons/react/24/outline/SwatchIcon.js'),
	),
	TableCellsIcon: React.lazy(
		() => import('@heroicons/react/24/outline/TableCellsIcon.js'),
	),
	TagIcon: React.lazy(() => import('@heroicons/react/24/outline/TagIcon.js')),
	TicketIcon: React.lazy(
		() => import('@heroicons/react/24/outline/TicketIcon.js'),
	),
	TrashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/TrashIcon.js'),
	),
	TruckIcon: React.lazy(
		() => import('@heroicons/react/24/outline/TruckIcon.js'),
	),
	UserCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/UserCircleIcon.js'),
	),
	UserGroupIcon: React.lazy(
		() => import('@heroicons/react/24/outline/UserGroupIcon.js'),
	),
	UserMinusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/UserMinusIcon.js'),
	),
	UserPlusIcon: React.lazy(
		() => import('@heroicons/react/24/outline/UserPlusIcon.js'),
	),
	UserIcon: React.lazy(() => import('@heroicons/react/24/outline/UserIcon.js')),
	UsersIcon: React.lazy(
		() => import('@heroicons/react/24/outline/UsersIcon.js'),
	),
	VariableIcon: React.lazy(
		() => import('@heroicons/react/24/outline/VariableIcon.js'),
	),
	VideoCameraSlashIcon: React.lazy(
		() => import('@heroicons/react/24/outline/VideoCameraSlashIcon.js'),
	),
	VideoCameraIcon: React.lazy(
		() => import('@heroicons/react/24/outline/VideoCameraIcon.js'),
	),
	ViewColumnsIcon: React.lazy(
		() => import('@heroicons/react/24/outline/ViewColumnsIcon.js'),
	),
	WalletIcon: React.lazy(
		() => import('@heroicons/react/24/outline/WalletIcon.js'),
	),
	WifiIcon: React.lazy(() => import('@heroicons/react/24/outline/WifiIcon.js')),
	WrenchScrewdriverIcon: React.lazy(
		() => import('@heroicons/react/24/outline/WrenchScrewdriverIcon.js'),
	),
	WrenchIcon: React.lazy(
		() => import('@heroicons/react/24/outline/WrenchIcon.js'),
	),
	XCircleIcon: React.lazy(
		() => import('@heroicons/react/24/outline/XCircleIcon.js'),
	),
	XMarkIcon: React.lazy(
		() => import('@heroicons/react/24/outline/XMarkIcon.js'),
	),
};
